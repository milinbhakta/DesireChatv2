<script lang="ts">
	let username: string = '';

	function handleInputChange(event: Event) {
		const target = event.target as HTMLInputElement;
		username = target.value;
	}
</script>

<main class="container mx-auto mt-40">
	<div class="card variant-ghost">
		<div class="card-header">
			<h2 class="h2">Login</h2>
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
		<div class="card-footer">
			<button type="button" class="btn btn-primary variant-filled">Login</button>
		</div>
	</div>
</main>
