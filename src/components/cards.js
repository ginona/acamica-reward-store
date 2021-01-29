import React, {useState} from "react"
import coin from "../assets/coin.svg"
import buy from "../assets/buy-blue.svg"
import emojiSmile from "../assets/emoji-smile.svg"
import sadEmoji from "../assets/sad-emoji.svg"
import postRedeem from "../actions/postRedeem.js"
import { userContext } from '../context/userContext';

function Cards(props) {
    
    const [hovered, isHovered] = useState(false);
    const [successRedeem, setSuccessRedeem] = useState("");
    const { points, setPoints } = React.useContext(userContext);

    const handleRedeem = (id, cost) => {
        postRedeem(id).then(response => { setSuccessRedeem(response.message); setPoints(points <= 0 ? 0 : points - cost) });
    }
    
    return (
        <div 
            className="card" 
            style={{ width: "18rem" }}
            onMouseOver={() => isHovered(true)}
            onMouseLeave={() => isHovered(false)}>
            <img src={props.img.url} className={hovered ? "img-hovered card-img-top" : "card-img-top"} alt={props.name}/>
            <button type="button" className="btn btn-dark" disabled={ props.cost > points }  onClick={() => handleRedeem(props._id, props.cost)}>Redeem now</button>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{props.category}</h6>
                <h6 className="card-title">{props.name}</h6>
            </div>
            { hovered ? 
            <div className="card-hovered"> 
                <div className="buttons-card-hovered"> 
                    <img className="buy" src={buy} alt="buy"/>
                    <h5 className="card-cost"> { props.cost <= points ? props.cost : "Te faltan " + (props.cost - points)} </h5> 
                    <img className="coin" src={coin} alt="coin"/>  
                </div>
            </div>: null }
            { successRedeem === "You've redeem the product successfully" ?
            <div className="product-modal"> 
                <button className="close" id="closeSuccessRedeeem" onClick={() => setSuccessRedeem("")}> X </button>
                <div className="product-modal-div">
                    <img className="face" src={emojiSmile} alt="success" />
                    <h4 className="successRedeem"> {successRedeem} </h4>
                </div>
            </div> 
            : typeof successRedeem === 'undefined'?
            <div className="product-modal-failed"> 
                <button className="close" id="closeSuccessRedeeem" onClick={() => setSuccessRedeem("")}> X </button>
                <div className="product-modal-div">
                    <img className="face" src={sadEmoji} alt="success" />
                    <h4 className="successRedeem"> Error, try again. </h4>
                </div>
            </div>
            : null }
        </div> 
    )
   
}

export default Cards