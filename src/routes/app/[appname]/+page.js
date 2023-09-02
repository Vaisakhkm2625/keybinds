
import { page } from '$app/stores';

export const load = async ({ params, fetch }) => {

    let app = params.appname;
    const fetchData = async () => {
        //hack
        let url = `http://localhost:5173/data/keybinds/${app}.json`;
        let response = await fetch(url);
        return await response.json();
    }


    console.log("changed route:" + app)
    return { jsonOutput: fetchData(), app };
}
