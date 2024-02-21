<script lang="ts">
	import { goto } from '$app/navigation';
	import chatClient from '$lib/chatClient';
	let username: string = '';

	async function getToken(username: string) {
		const response = await fetch('/api/token', {
			method: 'POST',
			body: JSON.stringify({ userId: username }),
			headers: {
				'content-type': 'application/json'
			}
		});

		const res = await response.json();
		return res.token;
	}

	async function handleInputChange(event: Event) {
		const target = event.target as HTMLInputElement;
		username = target.value;
		const token = await getToken(username);
		if (!chatClient.user && token && username) {
			await chatClient.connectUser(
				{ id: username, name: username, image: 'https://getstream.io/random_svg/?name=John' },
				token
			);
		}
		if (chatClient.user && chatClient.user.id === username) {
			goto(`/chat`);
		}
	}
</script>

<main class="container mx-auto mt-40">
	<div class="card variant-ghost">
		<div class="card-header">
			<h2 class="h3">Login</h2>
		</div>
		<div class="p-5">
			<label class="label">
				<span>Username</span>
				<input
					id="username"
					class="input"
					type="text"
					placeholder="Your Full Name"
					bind:value={username}
					on:change={handleInputChange}
				/>
			</label>
		</div>
		<div class="card-footer flex justify-end">
			<button type="button" class="btn btn-primary variant-filled">Login</button>
		</div>
	</div>
</main>
