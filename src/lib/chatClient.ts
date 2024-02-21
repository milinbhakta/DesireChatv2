import { StreamChat } from 'stream-chat';

const chatClient = StreamChat.getInstance(import.meta.env.VITE_STREAM_API_KEY, {
	timeout: 6000
});

export default chatClient;
