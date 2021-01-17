import React from 'react'
import getUser from '../actions/getUser'

export const userContext = React.createContext();

export const UserContext = (props) => {
    const [user, setUser] = React.useState([])
    const [redeem, setRedeem] = React.useState([])

    React.useEffect(() => {
        getUser().then(e => setUser(e));
    },[])

    return (
        <userContext.Provider value={{user, setUser}}>
            {props.children}
        </userContext.Provider>
    );
}