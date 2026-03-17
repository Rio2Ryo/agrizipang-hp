import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT = process.env.CONTACT_EMAIL ?? "info@agrizipang.jp";
const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { org, name, email, message } = body as {
    org?: string;
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "必須項目を入力してください。" },
      { status: 422 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "有効なメールアドレスを入力してください。" },
      { status: 422 }
    );
  }

  if (RESEND_API_KEY) {
    try {
      const resend = new Resend(RESEND_API_KEY);

      await resend.emails.send({
        from: "noreply@agrizipang.jp",
        to: RECIPIENT,
        subject: `【アグリ・ジパング】お問い合わせ: ${org ?? "（団体名未記入）"}`,
        text: [
          `団体・企業名: ${org ?? "—"}`,
          `ご担当者名: ${name}`,
          `メールアドレス: ${email}`,
          "",
          "ご相談内容:",
          message,
        ].join("\n"),
      });

      await resend.emails.send({
        from: "noreply@agrizipang.jp",
        to: email,
        subject: "【アグリ・ジパング】お問い合わせを受け付けました",
        text: [
          `${name} 様`,
          "",
          "このたびはアグリ・ジパングへお問い合わせいただき、誠にありがとうございます。",
          "内容を確認のうえ、担当者より折り返しご連絡いたします。",
          "",
          "━━━━━━━━━━━━━━━━━━━━━━━━",
          "農事組合法人 アグリ・ジパング",
          "栃木県宇都宮市",
          "平日 9:00 - 18:00（JST）",
          "━━━━━━━━━━━━━━━━━━━━━━━━",
        ].join("\n"),
      });
    } catch (err) {
      console.error("[contact/route] Resend error:", err);
      return NextResponse.json(
        { error: "メール送信に失敗しました。時間をおいて再度お試しください。" },
        { status: 500 }
      );
    }
  } else {
    console.log("[contact/route] RESEND_API_KEY not set — submission logged:", {
      org,
      name,
      email,
      message,
    });
  }

  return NextResponse.json({ ok: true });
}
