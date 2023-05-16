import {Link} from 'react-router-dom'
import { useAuth } from './security/AuthContext'

export default function HeaderComponent() {

    // const authContext = useContext(AuthContext)
    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    function logout() {
        authContext.setAuthenticated(false)
    }

    // console.log(authContext.number)
    console.log(authContext)

    return (
            // <header className="header">
            //     <div className="container">
            //         <ul className="navbar-nav">
            //             <li className="nav-item"><a className="nav-link" href="https://www.spring.com">spring</a></li>

            //             <li className="nav-item"><Link className="nav-link" to="/welcome/springuser">Home</Link></li>
            //             <li className="nav-item"><Link className="nav-link" to="/todos">Todos</Link></li>

            //             <li className="nav-item"><Link className="nav-link" to="/logout">logout</Link></li>
            //             <li className="nav-item"><Link className="nav-link" to="/">login</Link></li>
                        
            //         </ul>
            //     </div>
            // </header>

            <header className="border-bottom border-light border-5 mb-5 p-2">
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://spring.com">spring</a>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    { isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li> }
                                    { isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li> }
                                </ul>
                            </div>
                            <ul className="navbar-nav">
                                { !isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li> }
                                { isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/logout" onClick={logout}>Logout</Link></li> }
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
    )
}


