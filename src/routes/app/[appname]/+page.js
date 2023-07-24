
import { page } from '$app/stores';

export const load = async ({ params }) => {

    let appname = params.appname;

    return { appname };
}
