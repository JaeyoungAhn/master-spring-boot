import { useState } from 'react';
import {BrowserRouter, Routes, Route, useNavigate, useParams} from 'react-router-dom'
import './TodoApp.css'


export default function TodoApp() {
    return (
        <>
            <div className="TodoApp">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<LoginComponent></LoginComponent>}/>
                        <Route path='/login' element={<LoginComponent></LoginComponent>}/>
                        <Route path='/welcome/:username' element={<WelcomeComponent></WelcomeComponent>}/>
                        <Route path='/todos' element={<ListTodosComponent/>}/>
                        <Route path='*' element={<ErrorComponent/>}/>
                        
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('springuser')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate();

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
            navigate(`/welcome/${username}`)
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
                <h1>Time to Login!</h1>
                {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
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



function WelcomeComponent() {

    const {username} = useParams()

    return (
        <div className="WelcomeComponent">
            <h1>Welcome!</h1>
            <div>
                Welcome {username}!
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <>
            <div className="ErrorComponent">
                <h1>We are working really hard!</h1>
                <div>
                    Apologies for the 404. Reach out our team at ABC-DEF-GHIJ
                </div>
            </div>
        </>
    )
}

function ListTodosComponent() {
    const todos = [
            {id: 1, description: 'Learn AWS' },
            {id: 2, description: 'Learn Full Stack Dev' },
            {id: 3, description: 'Learn DevOps' },
        ]

    return (
        <>
            <div className="ErrorComponent">
                <h1>Things You Want To Do!</h1>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>id</td>
                                <td>description</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map(
                                    todo => (
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                        </tr>
                                    )
                                )
                            }
                                
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
