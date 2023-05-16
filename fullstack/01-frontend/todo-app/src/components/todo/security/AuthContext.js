import { createContext, useState, useContext } from "react";

//1: Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2: Share the created context with other components
export default function AuthProvider({ children }) {
    const [number, setNumber] = useState(0)
    const [isAuthenticated, setAuthenticated] = useState(false)


    // setInterval ( () =>
    //     setNumber(number+1)
    //     ,
    //     1000
    // )
    


    return (
        // const valueToBeShared = {number, isAuthenticated, setAuthenticated}
        // shorthand format for key:value
        <AuthContext.Provider value={ {number, isAuthenticated, setAuthenticated} }>
            {children}
        </AuthContext.Provider>
    )
}