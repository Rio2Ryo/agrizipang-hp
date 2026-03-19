import { NextRequest, NextResponse } from 'next/server';
import { isAuthorizedRequest } from '../../../../../lib/admin';
import { deleteMessage, updateMessageStatus } from '../../../../../lib/message-store';
import { MessageStatus } from '../../../../../lib/contact';

const VALID_STATUSES: MessageStatus[] = ['new', 'replied', 'closed'];

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  if (!isAuthorizedRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const status = body?.status as MessageStatus | undefined;

  if (!status || !VALID_STATUSES.includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 422 });
  }

  const { id } = await context.params;
  const updated = await updateMessageStatus(id, status);

  if (!updated) {
    return NextResponse.json({ error: 'Message not found' }, { status: 404 });
  }

  return NextResponse.json({ ok: true, message: updated });
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  if (!isAuthorizedRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await context.params;
  const deleted = await deleteMessage(id);

  if (!deleted) {
    return NextResponse.json({ error: 'Message not found' }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
