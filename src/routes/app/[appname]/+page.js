
import { page } from '$app/stores';

export const load = async ({ params }) => {

    let app = params.appname;

    console.log("changed route:" + app)
    return { app };
}
