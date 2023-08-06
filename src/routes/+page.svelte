<script>
	import Main from '$lib/Main.svelte';

	export let data;
	const { jsonOutput } = data;
</script>

<Main {jsonOutput} />
