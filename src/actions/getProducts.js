import { headers, URL_GETPRODUCTS } from "./constants"

async function getProducts() {

    try {
        const response = await fetch(URL_GETPRODUCTS, { method: "GET", headers })
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export default getProducts