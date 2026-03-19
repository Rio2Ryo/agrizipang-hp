import { kv } from './kv';
import { ContactMessage, MESSAGE_SET_KEY, MessageStatus } from './contact';

type Primitive = string | number | boolean | null;

declare global {
  // eslint-disable-next-line no-var
  var __agrizipangMemoryStore: Map<string, unknown> | undefined;
}

const memoryStore = globalThis.__agrizipangMemoryStore ?? new Map<string, unknown>();
globalThis.__agrizipangMemoryStore = memoryStore;

function kvEnabled() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

async function kvSetJson(key: string, value: unknown) {
  if (kvEnabled()) {
    await kv.set(key, JSON.stringify(value));
    return;
  }
  memoryStore.set(key, value);
}

async function kvGetJson<T>(key: string): Promise<T | null> {
  if (kvEnabled()) {
    const value = await kv.get<string | T>(key);
    if (!value) return null;
    if (typeof value === 'string') {
      try {
        return JSON.parse(value) as T;
      } catch {
        return value as T;
      }
    }
    return value as T;
  }
  return (memoryStore.get(key) as T | undefined) ?? null;
}

async function kvDelete(key: string) {
  if (kvEnabled()) {
    await kv.del(key);
    return;
  }
  memoryStore.delete(key);
}

async function getIdSet(): Promise<Set<string>> {
  if (kvEnabled()) {
    const ids = await kv.smembers<string[]>(MESSAGE_SET_KEY);
    return new Set(Array.isArray(ids) ? ids : []);
  }

  const ids = (memoryStore.get(MESSAGE_SET_KEY) as string[] | undefined) ?? [];
  return new Set(ids);
}

async function saveIdSet(set: Set<string>) {
  if (kvEnabled()) {
    return;
  }
  memoryStore.set(MESSAGE_SET_KEY, Array.from(set));
}

async function addId(id: string) {
  if (kvEnabled()) {
    await kv.sadd(MESSAGE_SET_KEY, id);
    return;
  }
  const ids = await getIdSet();
  ids.add(id);
  await saveIdSet(ids);
}

async function removeId(id: string) {
  if (kvEnabled()) {
    await kv.srem(MESSAGE_SET_KEY, id);
    return;
  }
  const ids = await getIdSet();
  ids.delete(id);
  await saveIdSet(ids);
}

export async function saveMessage(message: ContactMessage) {
  await kvSetJson(`message:${message.id}`, message);
  await addId(message.id);
}

export async function getMessage(id: string) {
  return kvGetJson<ContactMessage>(`message:${id}`);
}

export async function getAllMessages() {
  const ids = Array.from(await getIdSet());
  const messages = await Promise.all(ids.map((id) => getMessage(id)));
  return messages
    .filter((message): message is ContactMessage => Boolean(message))
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function updateMessageStatus(id: string, status: MessageStatus) {
  const message = await getMessage(id);
  if (!message) return null;
  const updated: ContactMessage = { ...message, status };
  await kvSetJson(`message:${id}`, updated);
  return updated;
}

export async function deleteMessage(id: string) {
  const message = await getMessage(id);
  if (!message) return false;
  await kvDelete(`message:${id}`);
  await removeId(id);
  return true;
}

export async function getRateLimitCount(key: string) {
  const value = await kvGetJson<Primitive>(key);
  return typeof value === 'number' ? value : Number(value ?? 0);
}

export async function incrementRateLimit(key: string, windowSeconds: number) {
  if (kvEnabled()) {
    const count = await kv.incr(key);
    if (count === 1) {
      await kv.expire(key, windowSeconds);
    }
    return count;
  }

  const entry = (memoryStore.get(key) as { count: number; expiresAt: number } | undefined) ?? null;
  const now = Date.now();
  const next = !entry || entry.expiresAt <= now
    ? { count: 1, expiresAt: now + windowSeconds * 1000 }
    : { count: entry.count + 1, expiresAt: entry.expiresAt };

  memoryStore.set(key, next);
  return next.count;
}
