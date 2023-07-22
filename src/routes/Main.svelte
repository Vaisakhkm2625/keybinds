<script>
	import Fuse from 'fuse.js';

	function convertToJSON(fileContent) {
		const lines = fileContent.split('\n');
		const jsonOutput = [];

		let shortcut = '';
		let command = '';
		let a = '';

		for (const line of lines) {
			if (line.trim() === '') {
				// Skip empty lines
				continue;
			} else if (shortcut === '') {
				// The first non-empty line is the shortcut
				shortcut = line.trim();
			} else if (command === '') {
				// The second non-empty line is the command
				command = line.trim();
				a = { shortcut: shortcut, command: command };

				jsonOutput.push(a);
				// Reset the variables for the next shortcut and command
				shortcut = '';
				command = '';
			}
		}

		return jsonOutput;
	}

	let data = `
XF86Audio{Prev,Next}
    mpc -q {prev,next}

@XF86LaunchA
    scrot -s -e 'image_viewer $f'

super + shift + equal
    sxiv -rt "$HOME/image"

XF86LaunchB
    xdotool selectwindow | xsel -bi

super + {h,j,k,l}
    bspc node -f {west,south,north,east}

super + alt + {0-9}
    mpc -q seek {0-9}0%

super + {alt,ctrl,alt + ctrl} + XF86Eject
    sudo systemctl {suspend,reboot,poweroff}

super + {_,shift + }{h,j,k,l}
    bspc node -{f,s} {west,south,north,east}

{_,shift + ,super + }XF86MonBrightness{Down,Up}
    bright {-1,-10,min,+1,+10,max}

super + o ; {e,w,m}
    {gvim,firefox,thunderbird}
`;

	const jsonOutput = convertToJSON(datavar);
	//console.log(jsonOutput);

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
