import { NextRequest, NextResponse } from 'next/server';
import { isAuthorizedRequest } from '../../../../lib/admin';
import { getAllMessages } from '../../../../lib/message-store';

export async function GET(request: NextRequest) {
  if (!isAuthorizedRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const messages = await getAllMessages();
  return NextResponse.json({ messages });
}
