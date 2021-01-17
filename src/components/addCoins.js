import React from "react"
import coin from "../assets/coin.svg"
import postCoins from "../actions/postCoins"
import { THOUSAND, FIVETHOUSAND, SEVENTHOUSAND} from "../actions/constants"



function AddCoins() {
    const [message, setMessage] = React.useState("")

    const handleClick = (number) =>{
        postCoins(number).then(response => setMessage(response.message))
    }

    return (
        <div>
            <h4> Add more coins </h4>
            <button onClick= {() => handleClick(THOUSAND)}>
                <img src={coin} alt={THOUSAND} />
                {THOUSAND}
            </button>
            <button onClick= {() => handleClick(FIVETHOUSAND)}>
                <img src={coin} alt={FIVETHOUSAND} />
                {FIVETHOUSAND}
            </button>
            <button onClick= {() => handleClick(SEVENTHOUSAND)}>
                <img src={coin} alt={SEVENTHOUSAND}  />
                {SEVENTHOUSAND}
            </button>
        </div>


    )
}

export default AddCoins