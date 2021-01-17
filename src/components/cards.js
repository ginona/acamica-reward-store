import React, {useState} from "react"
import coin from "../assets/coin.svg"
import postRedeem from '../actions/postRedeem'


function Cards(props) {
    
    const [hovered, isHovered] = useState(false)

    return (
        <div 
            className="card" 
            style={{ width: "18rem" }}
            onMouseOver={() => isHovered(true)}
            onMouseLeave={() => isHovered(false)}>
            <img src={props.img.url} className={hovered ? "img-hovered card-img-top" : "card-img-top"} alt={props.name}/>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{props.category}</h6>
                <h6 className="card-title">{props.name}</h6>
            </div>
            {hovered ? 
            <div className="card-hovered"> 
                <div className="buttons-card-hovered"> 
                    <div className="card-cost"> {props.cost} </div> 
                    <img src={coin} alt="coin"/>
                    <button type="button" class="btn btn-dark" onClick={(e) => {e.preventDefault(); postRedeem(props._id);}}>Redeem now</button>
                </div>
            </div>: null}
        </div> 
    )
   
}

export default Cards