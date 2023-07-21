<script>
	import { fly } from 'svelte/transition';
	import { browser } from '$app/environment';

	import CheckBox from './CheckBox.svelte';
	import SideNav from './SideNav.svelte';
	import Main from './Main.svelte';

</script>

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
		<Main />
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
</style>
