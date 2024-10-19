import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const body = await request.json();
	console.log(body);
	return json({ success: true });
}
