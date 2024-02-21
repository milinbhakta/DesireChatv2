<script lang="ts">
	import { LightSwitch, ProgressRadial } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	let loading = false;

	const signOutClick = async () => {
		loading = true;
	};
</script>

<LightSwitch rounded="rounded-full" />
{#if $page.data.session?.user}
	<div class="flex items-center gap-2">
		<img
			class="h-7 w-7 rounded-full"
			referrerpolicy="no-referrer"
			src={$page.data.session?.user?.image}
			alt={$page.data.session?.user?.name}
		/>
		<p class="hidden font-bold md:block">{$page.data.session?.user?.name}</p>
	</div>
	<button on:click|once={signOutClick} class="variant-ringed-primary btn" disabled={loading}>
		{#if loading}
			Loading... <ProgressRadial class="ml-2 h-6 w-6" stroke={100} />
		{:else}
			<span class="flex gap-1">
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
				<span>Sign Out</span>
			</span>
		{/if}
	</button>
{/if}
