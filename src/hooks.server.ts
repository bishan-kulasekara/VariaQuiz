import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// handle GET request
	if (event.request.method === 'GET') {
		// add caching headers
		// event.response.headers.set('Cache-Control', 'max-age=3600');
	}

	// resolve request
	const response = await resolve(event);

	return response;
};
