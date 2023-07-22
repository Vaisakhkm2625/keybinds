<script>
	import Fuse from 'fuse.js';

	export let data;
	console.log(data);

	const { jsonOutput } = data;

	const options = {
		keys: ['shortcut', 'command'],
		threshold: 0.3,
		location: 1,
		distance: 100,
		includeMatches: true,
		includeScore: true,
		useExtendedSearch: true
	};

	const fuse = new Fuse(jsonOutput, options);

	let searchterm = '';

	let searchResult;
	$: searchResult = fuse.search(searchterm);

	function makeContentEditable(event) {
		event.srcElement.contentEditable = true;
	}
	function makeContentReadOnly(event) {
		event.srcElement.contentEditable = false;
	}
</script>

<h1 class="heading">Hello</h1>

<input bind:value={searchterm} placeholder="Fuzzy Search" autofocus /><br />

<table>
	{#each searchResult as item}
		<!-- content here -->
		<tr>
			<td
				bind:innerText={jsonOutput[item.refIndex].shortcut}
				contenteditable="false"
				on:dblclick={makeContentEditable}
				on:blur={makeContentReadOnly}
			/>
			<td
				bind:innerText={jsonOutput[item.refIndex].command}
				contenteditable="false"
				on:dblclick={makeContentEditable}
				on:blur={makeContentReadOnly}
			/>
			<br />
		</tr>
	{:else}
		{#each jsonOutput as item}
			<tr>
				<td bind:innerText={item.shortcut} contenteditable />
				<td bind:innerText={item.command} contenteditable />
			</tr>
		{/each}
	{/each}
</table>

<style>
	.heading {
		color: #fff;
		font-family: 'Inter', sans-serif;
		font-size: 2rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	table {
		width: 60%;
		color: white;
	}
	td {
		border-bottom: 1px solid;
		width: 50%;
		padding: 1rem;
		color: white;
	}
	tr:nth-child(even) {
		background-color: rgba(0, 0, 0, 0.1);
	}
	input {
		appearance: none;
		border: none;
		outline: none;
		width: 50%;
		background-color: rgba(0, 0, 0, 0.1);
		color: red;
		padding: 0.4em;
		color: white;
		margin-bottom: 1rem;
	}
</style>
