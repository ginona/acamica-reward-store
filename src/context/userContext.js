import React from 'react'
import getUser from '../actions/getUser'

export const userContext = React.createContext();

export const UserContext = (props) => {
    const [users, setUsers] = React.useState([])
    // const [redeem, setRedeem] = React.useState([])

    React.useEffect(() => {
        getUser().then(e => setUsers(e));
    },[users])

    return (
        <userContext.Provider value={{users, setUsers}}>
            {props.children}
        </userContext.Provider>
    );
}