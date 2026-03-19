export type MessageStatus = 'new' | 'replied' | 'closed';

export interface ContactMessage {
  id: string;
  org: string;
  name: string;
  email: string;
  message: string;
  status: MessageStatus;
  createdAt: string;
}

export interface ContactPayload {
  org?: string;
  name?: string;
  email?: string;
  message?: string;
}

export const MESSAGE_SET_KEY = 'contact:message_ids';
export const RATE_LIMIT_PREFIX = 'contact:rate_limit';
export const ADMIN_SESSION_KEY = 'agrizipang_admin_authenticated';
export const ADMIN_PASSWORD_STORAGE_KEY = 'agrizipang_admin_password';

export function normalizeContactPayload(payload: ContactPayload) {
  return {
    org: (payload.org ?? '').trim(),
    name: (payload.name ?? '').trim(),
    email: (payload.email ?? '').trim(),
    message: (payload.message ?? '').trim(),
  };
}

export function validateContactPayload(payload: ContactPayload) {
  const normalized = normalizeContactPayload(payload);

  if (!normalized.name || !normalized.email || !normalized.message) {
    return { ok: false as const, error: '必須項目を入力してください。', data: normalized };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(normalized.email)) {
    return {
      ok: false as const,
      error: '有効なメールアドレスを入力してください。',
      data: normalized,
    };
  }

  return { ok: true as const, data: normalized };
}

export function csvEscape(value: string) {
  const escaped = value.replace(/"/g, '""');
  return `"${escaped}"`;
}
