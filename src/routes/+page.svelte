<script>
	import { fade, fly } from 'svelte/transition';
	import CheckBox from './CheckBox.svelte';
	let list = [
		{ tabname: 'My Keybindings', role: 'folder' },
		{ tabname: 'LazyVim', role: 'keybindlist' },
		{ tabname: 'Neovim distributions', role: 'folder' },
		{ tabname: 'LazyVim', role: 'keybindlist' },
		{ tabname: 'LunarVim', role: 'keybindlist' },
		{ tabname: 'AstroNvim', role: 'keybindlist' },
		{ tabname: 'WM default bindings', role: 'folder' }
	];
	let visible = true;
</script>

<div class="container">
	{#if visible}
		<div
			class="item sidebar"
			in:fly={{ x: -200, duration: 200 }}
			out:fly={{ x: -200, duration: 200 }}
		>
			{#each list as item}
				{#if item.role == 'folder'}
					<div class="folder">{item.tabname}</div>
				{:else}
					<div class="keybindlist">{item.tabname}</div>
					<!-- else content here -->
				{/if}
			{/each}
		</div>
	{/if}
	<div class="close-btn">
		<CheckBox bind:visible />
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
		padding: 10px;
		gap: 10px;
	}
	.folder {
		background-color: #635985;
		border-radius: 10px;
		color: white;
		padding: 5px;
		font-size: 1.5rem;
	}

	.keybindlist {
		background-color: #635985;
		border-radius: 10px;
		align-self: flex-end;
		color: white;
		width: 90%;
		padding: 5px;
		font-size: 1.5rem;
	}

	.close-btn {
		position: fixed;
		left: 30px;
		bottom: 30px;
	}

	.main {
		flex-grow: 9;
	}
</style>
