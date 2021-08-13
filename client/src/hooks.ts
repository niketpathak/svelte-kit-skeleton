import type { GetSession } from '@sveltejs/kit/types.internal';

export async function getSession(request: GetSession) {

  return {
    user: {},
    siteUrl: 'http://example.com',
  };
}
