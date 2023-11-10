import { createContext, useState } from "react";

export const isAuthorizedContext = createContext(false)

export default function AuthorizedProvider({ children }) {
    const  {isLoggetIn, setIsLoggetIn}  = useState(false)

    return (
        <isAuthorizedContext.Provider
            value={{
                isLoggetIn,
                setIsLoggetIn
            }}>

            {children}
        </isAuthorizedContext.Provider>
    )
}