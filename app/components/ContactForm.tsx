"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  org: string;
  name: string;
  email: string;
  message: string;
}

const INITIAL: FormData = { org: "", name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg("ご担当者名・メールアドレス・ご相談内容は必須です。");
      setState("error");
      return;
    }

    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "送信に失敗しました。");
        setState("error");
        return;
      }

      setState("success");
      setForm(INITIAL);
    } catch {
      setErrorMsg("ネットワークエラーが発生しました。時間をおいて再度お試しください。");
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="card flex flex-col items-center justify-center gap-4 py-16 text-center">
        <span className="text-5xl">✅</span>
        <h3 className="text-xl font-bold text-deep">送信が完了しました</h3>
        <p className="max-w-sm text-sm leading-7 text-slate-600">
          お問い合わせを受け付けました。<br />
          担当者より折り返しご連絡いたします。
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-4 rounded-full border border-deep/30 px-6 py-2 text-sm font-semibold text-deep transition hover:bg-deep/5"
        >
          別のお問い合わせをする
        </button>
      </div>
    );
  }

  return (
    <form className="card space-y-5" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="org" className="text-sm font-semibold text-deep">
          団体・企業名
        </label>
        <input
          id="org"
          value={form.org}
          onChange={set("org")}
          className="mt-2 w-full rounded-2xl border border-deep/15 px-4 py-3 text-sm outline-none transition focus:border-brand"
          placeholder="例）〇〇市役所 / 〇〇株式会社"
        />
      </div>
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-deep">
          ご担当者名 <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          value={form.name}
          onChange={set("name")}
          required
          className="mt-2 w-full rounded-2xl border border-deep/15 px-4 py-3 text-sm outline-none transition focus:border-brand"
          placeholder="例）山田 太郎"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold text-deep">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={set("email")}
          required
          className="mt-2 w-full rounded-2xl border border-deep/15 px-4 py-3 text-sm outline-none transition focus:border-brand"
          placeholder="example@company.jp"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-deep">
          ご相談内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={set("message")}
          required
          className="mt-2 w-full rounded-2xl border border-deep/15 px-4 py-3 text-sm outline-none transition focus:border-brand"
          placeholder="対象地域、検討中テーマ、想定している連携内容などをご記入ください。"
        />
      </div>

      {state === "error" && errorMsg && (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full rounded-full bg-brand px-6 py-4 font-semibold text-white transition hover:bg-brand/90 disabled:opacity-60"
      >
        {state === "loading" ? "送信中…" : "相談内容を送信する"}
      </button>
      <p className="text-xs text-slate-400">
        * は必須項目です。平日 9:00–18:00 以内にご返信いたします。
      </p>
    </form>
  );
}
