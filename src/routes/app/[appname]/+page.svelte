<script>
	import { page } from '$app/stores';
	import Main from '$lib/Main.svelte';

	export let data;

	$: app = data.app;
	$: jsonOutput = data.jsonOutput;

	//$: appname = $page.params.appname;
</script>

<Main {app} {jsonOutput} />
