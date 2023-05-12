import React, { createContext, useState } from "react";



export const UserContext = createContext({
    userDetails: {},
    setUserDetails: () => {},
})

const UserContextProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState([]);


    const values = {
        userDetails,
        setUserDetails,
    }
    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserContextProvider;


