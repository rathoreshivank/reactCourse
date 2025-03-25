import React from "react";
import UserContext from "./UserContext";

export const UserContextprovider = ({children}) => {
    // Providing `user` and `setUser` to all children components
    const [user, setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}> 
            {children}
        </UserContext.Provider>
    )    
}