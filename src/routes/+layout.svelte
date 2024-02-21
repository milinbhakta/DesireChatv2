<script lang="ts">
	import '../app.postcss';
</script>

<header class="header-bar">
	<div class="container">
		<h1 class="h2 ml-3 p-3 capitalize">
			<span class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">
				Desire Chat
			</span>
		</h1>
	</div>
</header>
<slot class="container" />

<style>
	.header-bar {
		width: 100%;
		background: rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
		display: flex;
	}
</style>
