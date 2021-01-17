import { headers, URL_POSTREDEEM } from "./constants"

async function getUser(productId) {

    try {
        const response = await fetch(URL_POSTREDEEM, { method: "POST", headers, body: JSON.stringify({"productId": productId}) })
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export default getUser