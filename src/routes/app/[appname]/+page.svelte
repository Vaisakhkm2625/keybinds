<script>
	import { page } from '$app/stores';

	export let data;

	console.log(data);

	$: app = data.app;
	$: datavar = data.data;

	//$: appname = $page.params.appname;
</script>

{JSON.stringify(datavar)}
