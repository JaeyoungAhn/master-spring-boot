import { createContext, useState, useContext } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";

//1: Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2: Share the created context with other components
export default function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)

    // function login(username, password) {
    //     if(username==='springuser' && password==='hello') {
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     } else {
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }

    async function login(username, password) {

        const baToken = 'Basic ' + window.btoa(username + ":" + password)

        try {

            const response = await executeBasicAuthenticationService(baToken)

            if (response.status == 200) {
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)
                return true
            } else {
                logout()
                return false
            }
        } catch (error) {
            logout()
            return false
        }

    }

    function logout() {
        setAuthenticated(false)
        setToken(null)
        setUsername(null)
    }


    return (
        // const valueToBeShared = {number, isAuthenticated, setAuthenticated}
        // shorthand format for key:value
        <AuthContext.Provider value={{ isAuthenticated, login, logout, username, token }}>
            {children}
        </AuthContext.Provider>
    )
}