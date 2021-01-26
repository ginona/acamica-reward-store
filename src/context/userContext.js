import React from 'react'
import getUser from '../actions/getUser'

export const userContext = React.createContext();

export const UserProvider = (props) => {
    const [users, setUsers] = React.useState({})
    const [points, setPoints] = React.useState(0)

    React.useEffect(() => {
        getUser().then(e => {setUsers(e); setPoints(e.points)});
    },[])

    return (
        <userContext.Provider value={{ users, setUsers, points, setPoints }}>
            {props.children}
        </userContext.Provider>
    );
}