import React, {useState} from "react"
import coin from "../assets/coin.svg"
import buy from "../assets/buy-blue.svg"
import postRedeem from "../actions/postRedeem.js"


function Cards(props) {
    
    const [hovered, isHovered] = useState(false)
    const [successRedeem, setSuccessRedeem] = useState("")

    const handleRedeem = (id) => {
        postRedeem(id).then(response => setSuccessRedeem(response.message));
        console.log(successRedeem);
    }
    
    return (
        <div 
            className="card" 
            style={{ width: "18rem" }}
            onMouseOver={() => isHovered(true)}
            onMouseLeave={() => isHovered(false)}>
            <img src={props.img.url} className={hovered ? "img-hovered card-img-top" : "card-img-top"} alt={props.name}/>
            <button type="button" className="btn btn-dark" onClick={() => handleRedeem(props._id)}>Redeem now</button>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{props.category}</h6>
                <h6 className="card-title">{props.name}</h6>
            </div>
            {hovered ? 
            <div className="card-hovered"> 
                <div className="buttons-card-hovered"> 
                    <img className="buy" src={buy} alt="buy"/>
                    <h5 className="card-cost"> {props.cost} </h5> 
                    <img className="coin" src={coin} alt="coin"/>  
                </div>
                
            </div>: null}
            {successRedeem ?
            <div> {successRedeem} </div> 
            : null}

        </div> 
    )
   
}

export default Cards