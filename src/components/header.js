import React from 'react'
import getUser from "../actions/getUser"
import AddCoins from  './addCoins'

const Header = (props) => {
  const [users, setUsers] = React.useState([])
  const [modal, setModal ] = React.useState (false)

    React.useEffect(() => {
        getUser().then(e => setUsers(e));
    },[users])

    return (
        <section className="header">
            <h6> {users.name} </h6>
            <button onClick = {() => setModal(true)} > {users.points} </button>
            {modal ? 
            <AddCoins/> : null}
            <div className="container-header">
                <h6 className="title-header"> Electronics </h6>
            </div>
        </section>
    )
}

export default Header;