<script>
	import { fly } from 'svelte/transition';

	import CheckBox from './CheckBox.svelte';
	import SideNav from './SideNav.svelte';

	let visible;
	export let data;
	//const { sidebarData } = data;

	//let sidebarData;

	let title = 'Lazyvim keybindings';

	export const snapshot = {
		capture: () => visible,
		restore: (value) => (visible = value)
	};
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="container">
	{#if visible}
		<div
			class="item sidebar"
			in:fly={{ x: -200, duration: 200 }}
			out:fly={{ x: -200, duration: 200 }}
		>
			<SideNav />
		</div>
	{/if}
	<div class="close-btn">
		<CheckBox bind:visible />
	</div>
	<div class="item main">
		<slot />
	</div>
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
		overflow-y: auto;
		padding: 2rem;
	}

	.sidebar {
		flex-grow: 1;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		padding: 10px;
		gap: 10px;
	}

	.close-btn {
		position: fixed;
		left: 30px;
		bottom: 30px;
	}

	.main {
		flex-grow: 9;
	}

	::-webkit-scrollbar {
		width: 20px;
	}

	::-webkit-scrollbar-track {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: #18122b;
		border-radius: 30px;
		border: 6px solid transparent;
		background-clip: content-box;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: #a8bbbf;
	}
</style>
