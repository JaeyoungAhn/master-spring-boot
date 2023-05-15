import { useState } from 'react';
import './TodoApp.css';

export default function TodoApp() {
    return (
        <>
            <div className="TodoApp">
                Todo Management Application
                <LoginComponent></LoginComponent>
                {/* <WelcomeComponent></WelcomeComponent> */}
            </div>
        </>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('springuser')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    function handleUsernameChange(event) {
        setUsername(event.target.value)
        console.log(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
        console.log(event.target.value)
    }

    function handleSubmit(event) {
        if(username==='springuser' && password==='hello') {
            console.log('Success')
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
        } else {
            console.log('Failed')
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }

    }

    // function SuccessMessageComponent() {
    //     if(showSuccessMessage) {
    //         return <div className="successMessage">Authenticated Successfully</div>
    //     }
    //     return null
    // }
    
    // function ErrorMessageComponent() {
    //     if(showErrorMessage) {
    //         return <div className="errorMessage">Authenticated Failed. Please check your crednetials.</div>
    //     }
    //     return null
    // }

    return (
        <>
            <div className="Login">
                {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
                {showErrorMessage && <div className="errorMessage">Authenticated Failed. Please check your crednetials.</div>}
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



function WelcomeComponent() {
    return (
        <>
            <div className="Welcome">
                Welcome Component
            </div>
        </>
    )
}
