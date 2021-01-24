import React from "react"
import AddCoins from "../components/addCoins"
import { userContext } from '../context/userContext';
import coin from "../assets/coin.svg"


function Header() {

    const [modal, setModal] = React.useState(false)
    const { users } = React.useContext(userContext)

    return (
        <section className="header">
            {/* {userLoaded ?
            <h4> Loading... </h4> : */}
            <div className="userNameInfo">
                <h6 className="userName"> {users.name} </h6>
                <button className="button-headerCoins" onClick = {() => setModal(true)} > 
                    {users.points}
                    <img src={coin} alt="coin"/>
                </button>
            </div>
            
            {modal ? 
            <AddCoins setModal={setModal}/> : null}
            <div className="container-header">
                <h6 className="title-header"> Electronics </h6>
            </div>
        </section>
    )
}

export default Header