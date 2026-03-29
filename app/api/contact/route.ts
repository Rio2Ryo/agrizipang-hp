import { randomUUID } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  ContactMessage,
  RATE_LIMIT_PREFIX,
  validateContactPayload,
} from '../../../lib/contact';
import { incrementRateLimit, saveMessage } from '../../../lib/message-store';

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_SECONDS = 60;

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown';
  }

  return request.headers.get('x-real-ip') || 'unknown';
}

function buildEmailBody(message: ContactMessage) {
  return `お問い合わせがありました。

----------------------------------
団体・企業名：${message.org || '未入力'}
ご担当者名：${message.name}
メールアドレス：${message.email}
----------------------------------

ご相談内容：
${message.message}

----------------------------------
受信日時：${message.createdAt}
----------------------------------

管理画面からステータスを変更できます。
https://agrizipang-hp.vercel.app/admin`;
}

function buildAutoReplyBody(message: ContactMessage) {
  return `${message.name} 様

このたびはアグリ・ジパングへお問い合わせいただき、ありがとうございます。
以下の内容でお問い合わせを受け付けました。

----------------------------------
団体・企業名：${message.org || '未入力'}
ご担当者名：${message.name}
メールアドレス：${message.email}
----------------------------------

ご相談内容：
${message.message}

----------------------------------
受信日時：${message.createdAt}
----------------------------------

内容を確認のうえ、担当者よりご連絡いたします。

農事組合法人アグリ・ジパング
https://www.agrizipang.com`;
}

export async function POST(request: NextRequest) {
  const payload = await request.json().catch(() => null);
  if (!payload) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const validation = validateContactPayload(payload);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 422 });
  }

  const ip = getClientIp(request);
  const rateLimitKey = `${RATE_LIMIT_PREFIX}:${ip}`;
  const count = await incrementRateLimit(rateLimitKey, RATE_LIMIT_WINDOW_SECONDS);

  if (count > RATE_LIMIT_MAX) {
    return NextResponse.json(
      { error: '送信回数が上限に達しました。1分ほど待ってから再度お試しください。', retryAfter: RATE_LIMIT_WINDOW_SECONDS },
      {
        status: 429,
        headers: {
          'Retry-After': String(RATE_LIMIT_WINDOW_SECONDS),
        },
      }
    );
  }

  const message: ContactMessage = {
    id: randomUUID(),
    ...validation.data,
    status: 'new',
    createdAt: new Date().toISOString(),
  };

  await saveMessage(message);

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL || 'common.gifted.tokyo@gmail.com';

  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: 'no-reply@agrizipang.com',
        to: contactEmail,
        subject: `【お問い合わせ】${message.name}様より`,
        text: buildEmailBody(message),
      });

      await resend.emails.send({
        from: 'no-reply@agrizipang.com',
        to: message.email,
        subject: '【アグリ・ジパング】お問い合わせを受け付けました',
        text: buildAutoReplyBody(message),
      });
    } catch (error) {
      console.error('[api/contact] resend send failed', error);
      return NextResponse.json(
        {
          error: 'お問い合わせは保存されましたが、メール通知に失敗しました。管理画面から内容をご確認ください。',
          saved: true,
          id: message.id,
        },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ ok: true, id: message.id, status: message.status });
}
