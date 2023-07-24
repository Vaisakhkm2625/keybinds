<script>
	import Main from './Main.svelte';

	export let data;
	const { jsonOutput } = data;
</script>

<Main {jsonOutput} />
