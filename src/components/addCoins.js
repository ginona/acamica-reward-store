import React from "react"
import coin from "../assets/coin.svg"
import postCoins from "../actions/postCoins"
import { THOUSAND, FIVETHOUSAND, SEVENTHOUSAND} from "../actions/constants"



function AddCoins(props) {
    const [message, setMessage] = React.useState("")

    const handleClick = (number) =>{
        postCoins(number).then(response => setMessage(response.message))
    }
    
    return (
        <div className="modal-screen">
            <section className="addCoins">
                <h4 className="title-addCoins"> Add more coins </h4>
                <button className="button-addCoins one" onClick={() => handleClick(THOUSAND)}>
                    <img src={coin} alt={THOUSAND} />
                    {THOUSAND}
                </button>
                <button className="button-addCoins two" onClick={() => handleClick(FIVETHOUSAND)}>
                    <img src={coin} alt={FIVETHOUSAND} />
                    {FIVETHOUSAND}
                </button>
                <button className="button-addCoins three" onClick={() => handleClick(SEVENTHOUSAND)}>
                    <img src={coin} alt={SEVENTHOUSAND} />
                    {SEVENTHOUSAND}
                </button>
                <button className="closeAddCoins" onClick={() => props.setModal(false)}> X </button>
            </section>

        </div>

    )
}

export default AddCoins