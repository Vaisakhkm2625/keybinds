<script>
	import { fly } from 'svelte/transition';
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

	function clicked() {
		alert('hello');
	}
</script>

<div class="item sidebar" in:fly={{ x: -200, duration: 200 }} out:fly={{ x: -200, duration: 200 }}>
	{#each list as item}
		{#if item.role == 'folder'}
			<div class="folder">{item.tabname}</div>
		{:else}
			<div class="keybindlist" on:click={clicked}>{item.tabname}</div>
			<!-- else content here -->
		{/if}
	{/each}
</div>

<style>
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
		margin-top: 5px;
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
</style>
