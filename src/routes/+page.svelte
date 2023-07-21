<script>
	import CheckBox from './CheckBox.svelte';
	import SideNav from './SideNav.svelte';
	let visible = true;
</script>

<div class="container">
	{#if visible}
		<SideNav />
	{/if}
	<div class="close-btn">
		<CheckBox bind:visible />
	</div>
	<div class="item main" />
</div>

<style>
	.item {
		margin: 10px;
		border-radius: 20px;
		background-color: #393053;
	}
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
	.close-btn {
		position: fixed;
		left: 30px;
		bottom: 30px;
	}

	.main {
		flex-grow: 9;
	}
</style>
