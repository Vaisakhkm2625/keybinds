<script>
	import CheckBox from './CheckBox.svelte';
	import { onMount } from 'svelte';

	export let sidebarData;

	async function fetchData() {
		const response = await fetch('/data/app.json');
		sidebarData = await response.json();
	}

	onMount(() => {
		fetchData();
	});

	function clicked() {
		alert('hello');
	}
</script>

{#if sidebarData}
	{#each sidebarData as item}
		{#if item.role == 'folder'}
			<div class="folder">{item.tabname}</div>
		{:else}
			<div class="keybindlist"><a href="/app/{item.tabname}">{item.tabname}</a></div>
			<!-- else content here -->
		{/if}
	{/each}
{:else}
	<p>Loading...</p>
{/if}

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
