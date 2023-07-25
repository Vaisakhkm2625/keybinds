
import { page } from '$app/stores';

export const load = async ({ params }) => {

    let app = params.appname;

    async function fetchData() {
        //hack
        let url = `http://localhost:5173/data/keybinds/${app}.json`;
        console.log(url)
        const response = await fetch(url);
        return await response.json();
    }


    console.log("changed route:" + app)
    return { app, data: fetchData() };
}
