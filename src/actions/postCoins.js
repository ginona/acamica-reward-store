import { headers, URL_POSTCOINS } from "./constants"

async function getUser(coins) {

    try {
        const response = await fetch(URL_POSTCOINS, { method: "POST", headers, body: JSON.stringify({"amount": coins}) })
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export default getUser