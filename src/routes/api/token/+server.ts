import { StreamChat } from 'stream-chat';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

const api_key = process.env.VITE_STREAM_API_KEY;
const api_secret = process.env.VITE_STREAM_API_SECRET;

export const POST: RequestHandler = async ({ request }) => {
	const { userId } = await request.json();
	// Initialize a Server Client
	const serverClient = StreamChat.getInstance(api_key!, api_secret!);
	// Create User Token
	const token = serverClient.createToken(userId);
	return json({ token });
};
