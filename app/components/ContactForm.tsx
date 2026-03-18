"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { CheckCircle2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  org: string;
  name: string;
  email: string;
  message: string;
}

const INITIAL: FormData = { org: "", name: "", email: "", message: "" };

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormData>(INITIAL);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg(t.form.errRequired);
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
        setErrorMsg(data.error ?? t.form.errSend);
        setState("error");
        return;
      }

      setState("success");
      setForm(INITIAL);
    } catch {
      setErrorMsg(t.form.errNetwork);
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 flex flex-col items-center justify-center gap-5 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-brand/20 flex items-center justify-center">
          <CheckCircle2 className="w-9 h-9 text-brand-200" />
        </div>
        <h3 className="text-xl font-bold text-white">{t.form.successTitle}</h3>
        <p className="max-w-sm text-sm leading-7 text-white/70 whitespace-pre-line">
          {t.form.successBody}
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-2 rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          {t.form.reset}
        </button>
      </div>
    );
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-300/40 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-deep focus:ring-2 focus:ring-deep/20";

  const labelClass = "block text-sm font-semibold text-white/90";

  return (
    <form
      className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 space-y-5"
      onSubmit={handleSubmit}
      noValidate
    >
      <div>
        <label htmlFor="org" className={labelClass}>
          {t.form.org}
        </label>
        <input
          id="org"
          value={form.org}
          onChange={set("org")}
          className={inputClass}
          placeholder={t.form.orgPlaceholder}
        />
      </div>
      <div>
        <label htmlFor="name" className={labelClass}>
          {t.form.name} <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          value={form.name}
          onChange={set("name")}
          required
          className={inputClass}
          placeholder={t.form.namePlaceholder}
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          {t.form.email} <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={set("email")}
          required
          className={inputClass}
          placeholder={t.form.emailPlaceholder}
        />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          {t.form.message} <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={set("message")}
          required
          className={inputClass}
          placeholder={t.form.messagePlaceholder}
        />
      </div>

      {state === "error" && errorMsg && (
        <p className="rounded-xl bg-red-900/40 border border-red-400/30 px-4 py-3 text-sm text-red-300">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full rounded-full bg-deep px-6 py-4 font-semibold text-white transition hover:bg-deep/90 disabled:opacity-60 shadow-lg shadow-deep/20"
      >
        {state === "loading" ? t.form.submitting : t.form.submit}
      </button>
      <p className="text-xs text-white/40">
        {t.form.required}
      </p>
    </form>
  );
}
