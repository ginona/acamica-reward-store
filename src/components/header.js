import React from "react"
import AddCoins from "../components/addCoins"
import { userContext } from '../context/userContext';
import coin from "../assets/coin.svg"


function Header() {

    const [modal, setModal] = React.useState(false)
    const { users, points, history, setHistory } = React.useContext(userContext)

    return (
        <header className="header">
            {/* {userLoaded ?
            <h4> Loading... </h4> : */}
            <div className="userNameInfo">
                <div>
                    <div className="historyButton" onClick={() => setHistory(true)} style={{display: history ? "none" : "block"}}>
                        History
                    </div>
                    <div onClick={() => setHistory(false)} style={{display: history ? "block" : "none"}}>
                        Catalog
                    </div>
                </div>
                <h6 className="userName"> {users.name} </h6>
                <button className="button-headerCoins" onClick = {() => setModal(true)} > 
                    {points}
                    <img src={coin} alt="coin"/>
                </button>
            </div>
            
            {modal ? 
            <AddCoins setModal={setModal}/> : null}
            <div className="container-header">
                <h6 className="title-header"> Electronics </h6>
            </div>
        </header>
    )
}

export default Header