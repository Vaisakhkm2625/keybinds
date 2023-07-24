import apps from '$lib/app.json'

export const load = async () => {

    const fetchSidebarData = async () => {
        return apps;
    }

    return {
        sidebarData: fetchSidebarData()
    }
}

// export const load = async ({ fetch }) => {
//
//     const productRes = await fetch('https://dummyjson.com/products')
//     const productData = await productRes.json()
//     const products = productData.products
//
//     return {
//         products //or products:products
//     }
// }
//


// export const load = async ({ fetch }) => {
//
//     //this will avoid waterfall requests
//
//     const fetchProducts = async () => {
//         const productRes = await fetch('https://dummyjson.com/products')
//         const productData = await productRes.json()
//         return productData.products
//     }
//
//     const fetchthings = async () => {
//         const thingRes = await fetch('https://dummyjson.com/products')
//         const thingData = await thingRes.json()
//         return thingData.products
//     }
//
//     return {
//         products: fetchProducts(), //or products:products
//         things: fetchthings()
//     }
// }
//
//
