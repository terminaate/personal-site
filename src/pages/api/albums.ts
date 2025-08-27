import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const headers = new Headers();

  headers.set('content-type', 'application/json');
  return new Response(JSON.stringify({ albums: [] }), { headers });
};
