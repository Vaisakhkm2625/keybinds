<script>
	import { page } from '$app/stores';

	export let data;
	$: app = data.app;

	//$: appname = $page.params.appname;
</script>

{app}
