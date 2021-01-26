import React from "react"
import coin from "../assets/coin.svg"
import postCoins from "../actions/postCoins"
import { MIN, MED, MAX} from "../constants/constants"
import { userContext } from '../context/userContext';

function AddCoins(props) {
    const [show, setShow] = React.useState(false);
    const { points, setPoints } = React.useContext(userContext);

    React.useEffect(() => {
        if(show) 
            setTimeout(() => { setShow(false) }, 2000)
    },[show])

    const handleClick = (number) =>{
        postCoins(number).then(response => { setPoints(points + number); setShow(true) })
    }
    
    return (
        <div className="modal-screen">
            <section className="addCoins">
                <div>
                    {show && 
                    <div className={ "successEnabled successAddPoints" }> 
                        <h6 className="success-pointsSuccess"> Success </h6>
                    </div>
                    }
                </div>
                <h4 className="title-addCoins"> Add more coins </h4>
                <button className="button-addCoins one" onClick={() => handleClick(MIN)}>
                    <img src={coin} alt={MIN} />
                    {MIN}
                </button>
                <button className="button-addCoins two" onClick={() => handleClick(MED)}>
                    <img src={coin} alt={MED} />
                    {MED}
                </button>
                <button className="button-addCoins three" onClick={() => handleClick(MAX)}>
                    <img src={coin} alt={MAX} />
                    {MAX}
                </button>
                <button className="close" onClick={() => props.setModal(false)}> X </button>
            </section>
        </div>
    )
}

export default AddCoins