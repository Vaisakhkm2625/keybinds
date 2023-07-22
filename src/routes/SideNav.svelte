<script>
	import CheckBox from './CheckBox.svelte';

	export let sidebarData;
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

{#each sidebarData as item}
	{#if item.role == 'folder'}
		<div class="folder">{item.tabname}</div>
	{:else}
		<div class="keybindlist" on:click={clicked}>{item.tabname}</div>
		<!-- else content here -->
	{/if}
{/each}

<style>
	.folder {
		background-color: #635985;
		border-radius: 10px;
		color: white;
		padding: 5px;
		margin-top: 5px;
		font-size: 1.5 rem;
	}

	.keybindlist {
		background-color: #635985;
		border-radius: 10px;
		align-self: flex-end;
		color: white;
		width: 90%;
		padding: 5px;
		font-size: 1.5 rem;
	}
</style>
