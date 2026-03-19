"use client";

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ADMIN_PASSWORD_STORAGE_KEY, ADMIN_SESSION_KEY } from '../../lib/contact';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const authenticated = localStorage.getItem(ADMIN_SESSION_KEY) === 'true';
    if (authenticated) {
      router.replace('/admin/dashboard');
    }
  }, [router]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');

    if (!password.trim()) {
      setError('パスワードを入力してください。');
      return;
    }

    try {
      const response = await fetch('/api/admin/messages', {
        headers: {
          Authorization: `Bearer ${password.trim()}`,
        },
      });

      if (!response.ok) {
        setError('パスワードが正しくありません。');
        return;
      }

      localStorage.setItem(ADMIN_SESSION_KEY, 'true');
      localStorage.setItem(ADMIN_PASSWORD_STORAGE_KEY, password.trim());
      router.push('/admin/dashboard');
    } catch {
      setError('ログインに失敗しました。時間をおいて再度お試しください。');
    }
  };

  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-slate-900">
      <div className="mx-auto flex min-h-[80vh] max-w-md items-center">
        <div className="w-full rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-deep/70">Admin</p>
            <h1 className="mt-3 text-3xl font-bold text-deep">お問い合わせ管理画面</h1>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              管理者パスワードを入力すると、受信メッセージ一覧とステータス管理画面へ移動します。
            </p>
          </div>

          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="password">
                パスワード
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3.5 text-sm outline-none transition focus:border-deep focus:ring-2 focus:ring-deep/15"
                placeholder="管理者パスワード"
              />
            </div>

            {error ? (
              <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              className="w-full rounded-full bg-deep px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-deep/90"
            >
              ログイン
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
