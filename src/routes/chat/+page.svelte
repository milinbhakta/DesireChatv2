<script lang="ts">
	import { onMount } from 'svelte';
	import chatClient from '$lib/chatClient';

	onMount(() => {
		console.log('Chat page', chatClient);
	});
</script>

<div>Chat page</div>
