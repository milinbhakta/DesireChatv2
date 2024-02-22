<script lang="ts">
	let username = '';

	function handleChange(event: Event) {
		username = (event.target as HTMLInputElement).value;
	}

	function handleLogin(event: Event) {
		console.log('Login button clicked', username);
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="card">
		<header class="card-header"><h3>Login</h3></header>
		<section class="p-4">
			<label class="label">
				<span>Username</span>
				<input
					class="input"
					type="text"
					placeholder="Enter your username"
					on:change={handleChange}
				/>
			</label>
		</section>
		<footer class="card-footer flex justify-end">
			<button type="button" class="btn btn-primary variant-filled" on:click={handleLogin}
				>Login</button
			>
		</footer>
	</div>
</div>

<style lang="postcss">
</style>
