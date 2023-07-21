<script>
	let list = [
		{ tabname: 'My Keybindings', role: 'folder' },
		{ tabname: 'LazyVim', role: 'keybindlist' },
		{ tabname: 'Neovim distributions', role: 'folder' },
		{ tabname: 'LazyVim', role: 'keybindlist' },
		{ tabname: 'LunarVim', role: 'keybindlist' },
		{ tabname: 'AstroNvim', role: 'keybindlist' },
		{ tabname: 'WM default bindings', role: 'folder' }
	];
</script>

<div class="container">
	<div class="item sidebar">
		{#each list as item}
			{#if item.role == 'folder'}
				<div class="folder">{item.tabname}</div>
			{:else}
				<div class="keybindlist">{item.tabname}</div>
				<!-- else content here -->
			{/if}
		{/each}
	</div>
	<div class="item main" />
</div>

<style>
	.container {
		height: 100vh;
		width: 100vw;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		padding: 10px;
		justify-content: space-evenly;
	}
	.item {
		margin: 10px;
		border-radius: 20px;
		background-color: #393053;
	}

	.sidebar {
		flex-grow: 1;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		align-items: right;
		padding: 10px;
		gap: 10px;
	}
	.folder {
		background-color: #635985;
		border-radius: 10px;
		color: white;
		padding: 5px;
		font-size: 1rem;
	}

	.keybindlist {
		background-color: #635985;
		border-radius: 10px;
		color: white;
		width: 50%;
		padding: 5px;
		font-size: 1rem;
	}

	.main {
		flex-grow: 5;
	}
</style>
