import { NextRequest } from 'next/server';

export function getAdminPasswordFromRequest(request: NextRequest) {
  const header = request.headers.get('authorization')?.trim() || '';
  if (!header) return '';

  if (header.toLowerCase().startsWith('bearer ')) {
    return header.slice(7).trim();
  }

  return header;
}

export function isAuthorizedRequest(request: NextRequest) {
  const expected = process.env.ADMIN_PASSWORD?.trim();
  const provided = getAdminPasswordFromRequest(request);

  if (!expected || !provided) {
    return false;
  }

  return provided === expected;
}
