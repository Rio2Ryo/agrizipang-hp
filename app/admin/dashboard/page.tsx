"use client";

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ADMIN_PASSWORD_STORAGE_KEY,
  ADMIN_SESSION_KEY,
  ContactMessage,
  MessageStatus,
  csvEscape,
} from '../../../lib/contact';

const STATUS_OPTIONS: MessageStatus[] = ['new', 'replied', 'closed'];

const statusStyles: Record<MessageStatus, string> = {
  new: 'bg-sky-100 text-sky-700 border-sky-200',
  replied: 'bg-amber-100 text-amber-700 border-amber-200',
  closed: 'bg-emerald-100 text-emerald-700 border-emerald-200',
};

export default function AdminDashboardPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'all' | MessageStatus>('all');
  const [selected, setSelected] = useState<ContactMessage | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const password = typeof window === 'undefined'
    ? ''
    : localStorage.getItem(ADMIN_PASSWORD_STORAGE_KEY) || '';

  const authHeader = useMemo(() => ({ Authorization: `Bearer ${password}` }), [password]);

  const loadMessages = async () => {
    if (!password) {
      router.replace('/admin');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/messages', { headers: authHeader });
      if (response.status === 401) {
        localStorage.removeItem(ADMIN_SESSION_KEY);
        localStorage.removeItem(ADMIN_PASSWORD_STORAGE_KEY);
        router.replace('/admin');
        return;
      }

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'メッセージの取得に失敗しました。');
      }

      setMessages(data.messages || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'メッセージの取得に失敗しました。');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const authenticated = localStorage.getItem(ADMIN_SESSION_KEY) === 'true';
    if (!authenticated) {
      router.replace('/admin');
      return;
    }

    void loadMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const filteredMessages = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return messages.filter((message) => {
      const matchesFilter = filter === 'all' || message.status === filter;
      const haystack = [message.org, message.name, message.email, message.message]
        .join(' ')
        .toLowerCase();
      const matchesQuery = !keyword || haystack.includes(keyword);
      return matchesFilter && matchesQuery;
    });
  }, [filter, messages, query]);

  const handleStatusChange = async (id: string, status: MessageStatus) => {
    setBusyId(id);
    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          ...authHeader,
        },
        body: JSON.stringify({ status }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'ステータス更新に失敗しました。');
      }

      setMessages((current) =>
        current.map((message) => (message.id === id ? data.message : message))
      );
      setSelected((current) => (current?.id === id ? data.message : current));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'ステータス更新に失敗しました。');
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('このメッセージを削除しますか？')) {
      return;
    }

    setBusyId(id);
    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: 'DELETE',
        headers: authHeader,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || '削除に失敗しました。');
      }

      setMessages((current) => current.filter((message) => message.id !== id));
      setSelected((current) => (current?.id === id ? null : current));
    } catch (err) {
      setError(err instanceof Error ? err.message : '削除に失敗しました。');
    } finally {
      setBusyId(null);
    }
  };

  const exportCsv = () => {
    const header = ['id', 'createdAt', 'status', 'org', 'name', 'email', 'message'];
    const rows = filteredMessages.map((message) => [
      message.id,
      message.createdAt,
      message.status,
      message.org,
      message.name,
      message.email,
      message.message,
    ]);

    const csv = [header, ...rows].map((row) => row.map((value) => csvEscape(String(value ?? ''))).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `agrizipang-messages-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const logout = () => {
    localStorage.removeItem(ADMIN_SESSION_KEY);
    localStorage.removeItem(ADMIN_PASSWORD_STORAGE_KEY);
    router.push('/admin');
  };

  return (
    <main className="min-h-screen bg-stone-100 px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.06)] sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-deep/70">Admin Dashboard</p>
              <h1 className="mt-3 text-3xl font-bold text-deep">お問い合わせ一覧</h1>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                受信メッセージの確認、ステータス変更、CSV エクスポートができます。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={loadMessages}
                className="rounded-full border border-stone-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-stone-100"
              >
                再読み込み
              </button>
              <button
                onClick={exportCsv}
                className="rounded-full bg-deep px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-deep/90"
              >
                CSV エクスポート
              </button>
              <button
                onClick={logout}
                className="rounded-full border border-stone-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-stone-100"
              >
                ログアウト
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_220px]">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="団体名・担当者名・メール・内容で検索"
              className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-deep focus:ring-2 focus:ring-deep/15"
            />
            <select
              value={filter}
              onChange={(event) => setFilter(event.target.value as 'all' | MessageStatus)}
              className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-deep focus:ring-2 focus:ring-deep/15"
            >
              <option value="all">全ステータス</option>
              <option value="new">new</option>
              <option value="replied">replied</option>
              <option value="closed">closed</option>
            </select>
          </div>

          {error ? (
            <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          ) : null}
        </section>

        <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.06)]">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-stone-200 text-sm">
              <thead className="bg-stone-50 text-left text-slate-600">
                <tr>
                  <th className="px-4 py-4 font-semibold">受信日時</th>
                  <th className="px-4 py-4 font-semibold">団体名</th>
                  <th className="px-4 py-4 font-semibold">担当者</th>
                  <th className="px-4 py-4 font-semibold">メール</th>
                  <th className="px-4 py-4 font-semibold">ステータス</th>
                  <th className="px-4 py-4 font-semibold">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {loading ? (
                  <tr>
                    <td className="px-4 py-8 text-center text-slate-500" colSpan={6}>
                      読み込み中...
                    </td>
                  </tr>
                ) : filteredMessages.length === 0 ? (
                  <tr>
                    <td className="px-4 py-8 text-center text-slate-500" colSpan={6}>
                      条件に合うメッセージがありません。
                    </td>
                  </tr>
                ) : (
                  filteredMessages.map((message) => (
                    <tr key={message.id} className="hover:bg-stone-50/80">
                      <td className="px-4 py-4 text-slate-600">{new Date(message.createdAt).toLocaleString('ja-JP')}</td>
                      <td className="px-4 py-4 font-medium text-slate-900">{message.org || '—'}</td>
                      <td className="px-4 py-4 text-slate-700">{message.name}</td>
                      <td className="px-4 py-4 text-slate-600">{message.email}</td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[message.status]}`}>
                          {message.status}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => setSelected(message)}
                            className="rounded-full border border-stone-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-stone-100"
                          >
                            詳細
                          </button>
                          <button
                            onClick={() => handleDelete(message.id)}
                            disabled={busyId === message.id}
                            className="rounded-full border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-50 disabled:opacity-60"
                          >
                            削除
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {selected ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-deep/70">Message Detail</p>
                <h2 className="mt-2 text-2xl font-bold text-deep">{selected.name}</h2>
                <p className="mt-2 text-sm text-slate-500">{new Date(selected.createdAt).toLocaleString('ja-JP')}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-stone-100"
              >
                閉じる
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <InfoCard label="団体・企業名" value={selected.org || '—'} />
              <InfoCard label="メールアドレス" value={selected.email} />
            </div>

            <div className="mt-4">
              <p className="mb-2 text-sm font-semibold text-slate-700">ご相談内容</p>
              <div className="rounded-3xl border border-stone-200 bg-stone-50 px-5 py-4 text-sm leading-7 text-slate-700 whitespace-pre-wrap">
                {selected.message}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {STATUS_OPTIONS.map((status) => (
                <button
                  key={status}
                  onClick={() => handleStatusChange(selected.id, status)}
                  disabled={busyId === selected.id}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition disabled:opacity-60 ${statusStyles[status]}`}
                >
                  {status} に変更
                </button>
              ))}
              <button
                onClick={() => handleDelete(selected.id)}
                disabled={busyId === selected.id}
                className="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50 disabled:opacity-60"
              >
                このメッセージを削除
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-stone-50 px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-2 break-words text-sm text-slate-700">{value}</p>
    </div>
  );
}
