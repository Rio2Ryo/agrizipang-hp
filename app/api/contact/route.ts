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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildAutoReplyHtml(message: ContactMessage) {
  const org = escapeHtml(message.org || '未入力');
  const name = escapeHtml(message.name);
  const email = escapeHtml(message.email);
  const body = escapeHtml(message.message).replace(/\n/g, '<br />');
  const createdAt = escapeHtml(message.createdAt);

  return `<!doctype html>
<html lang="ja">
  <body style="margin:0;padding:0;background:#f4f1e8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1f2937;">
    <div style="max-width:640px;margin:0 auto;padding:32px 20px;">
      <div style="background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e7e0d1;box-shadow:0 10px 30px rgba(0,0,0,0.06);">
        <div style="background:linear-gradient(135deg,#1f4d1a 0%, #4a7a1f 100%);padding:28px 24px;text-align:center;">
          <img src="https://www.agrizipang.com/images/logo.png" alt="アグリ・ジパング" style="height:56px;width:auto;display:block;margin:0 auto 14px;filter:brightness(0) invert(1);" />
          <div style="font-size:22px;line-height:1.4;font-weight:700;color:#ffffff;">お問い合わせを受け付けました</div>
        </div>
        <div style="padding:32px 24px;">
          <p style="margin:0 0 18px;font-size:16px;line-height:1.9;">${name} 様</p>
          <p style="margin:0 0 22px;font-size:16px;line-height:1.9;">このたびはアグリ・ジパングへお問い合わせいただき、ありがとうございます。以下の内容で受け付けました。</p>

          <div style="background:#faf8f2;border:1px solid #ece5d8;border-radius:16px;padding:20px 18px;margin:0 0 24px;">
            <div style="font-size:14px;line-height:1.8;"><strong>団体・企業名：</strong>${org}</div>
            <div style="font-size:14px;line-height:1.8;"><strong>ご担当者名：</strong>${name}</div>
            <div style="font-size:14px;line-height:1.8;"><strong>メールアドレス：</strong>${email}</div>
            <div style="font-size:14px;line-height:1.8;margin-top:14px;"><strong>ご相談内容：</strong><br />${body}</div>
            <div style="font-size:13px;line-height:1.8;color:#6b7280;margin-top:14px;"><strong>受信日時：</strong>${createdAt}</div>
          </div>

          <p style="margin:0 0 24px;font-size:15px;line-height:1.9;">内容を確認のうえ、担当者よりご連絡いたします。</p>

          <div style="padding-top:18px;border-top:1px solid #ece5d8;font-size:14px;line-height:1.8;color:#4b5563;">
            <strong style="color:#1f2937;">農事組合法人 アグリ・ジパング</strong><br />
            <a href="https://www.agrizipang.com" style="color:#2f6b1f;text-decoration:none;">https://www.agrizipang.com</a>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>`;
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
        html: buildAutoReplyHtml(message),
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
