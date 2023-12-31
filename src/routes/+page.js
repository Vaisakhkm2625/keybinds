
//import apps from '$lib/app.json'

export const load = async () => {

    const fetchJsonData = async () => {

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

        let datavar = `
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

        return convertToJSON(datavar);
        //console.log(jsonOutput);


    }


    return {
        jsonOutput: fetchJsonData(),
    }
}
