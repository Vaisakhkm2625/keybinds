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

	const jsonOutput = convertToJSON(data);
	console.log(jsonOutput);

	const list = [
		{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
		{ title: 'Th Great Gatsby', author: 'F. Fitzgerald' },
		{ title: 'To Kill a Mockingbird', author: 'Harper Lee' },
		{ title: 'Pride and Prejudice', author: 'Jane Austen' },
		{ title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
	];

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

	let searchterm = 'XF86Lau';
	$: searchResult = fuse.search(searchterm);
</script>

<input bind:value={searchterm} /><br />

<table>
	{#each searchResult as item}
		<!-- content here -->
		<tr><td>{item.item.shortcut} </td> <td>{item.item.command} </td><br /> </tr>{/each}
</table>

<style>
	table,
	td {
		border: 1px solid;
	}
</style>
