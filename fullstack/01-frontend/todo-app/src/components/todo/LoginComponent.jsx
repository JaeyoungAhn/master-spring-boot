import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext';

export default function LoginComponent() {

    const [username, setUsername] = useState('springuser')
    const [password, setPassword] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate()
    const authContext = useAuth()

    function handleUsernameChange(event) {
        setUsername(event.target.value)
        console.log(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
        console.log(event.target.value)
    }

    function handleSubmit(event) {
        if(authContext.login(username, password)) {
            navigate(`/welcome/${username}`)
        } else {
        }

    }

    return (
        <>
            <div className="Login">
                <h1>Time to Login!</h1>
                {showErrorMessage && <div className="errorMessage">Authenticated Failed. Please check your credentials.</div>}
{/* 
                <SuccessMessageComponent></SuccessMessageComponent>
                <ErrorMessageComponent></ErrorMessageComponent> */}
                <div className="LoginForm">
                    <div>
                        <label>User Name</label>
                        <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                    </div>
                    <div>
                        <label>Password Name</label>
                        <input type="password" name="password" onChange={handlePasswordChange}/>
                    </div>
                    <div>
                        <button type="button" onClick={handleSubmit}>login</button>
                    </div>
                </div>
            </div>
        </>
    )
}


