import { retrieveAllTodosForUsernameApi } from "./api/TodoApiService"
import { useState } from "react"
import { deleteTodoApi } from "./api/TodoApiService"
import { useEffect } from "react"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"

export default function ListTodosComponent() {

    const today = new Date()

    const authContext = useAuth()

    const username = authContext.username
    
    const navigate = useNavigate()

    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState('')

    useEffect(() => refreshTodos(), [])
    // const todos = [
    //         {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
    //         {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate},
    //         {id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate}
    //     ]

    function refreshTodos() {
        retrieveAllTodosForUsernameApi(username).
            then(reponse => {
                setTodos(reponse.data)
            }

            )
            .catch(error => console.log(error))
    }


    function deleteTodo(id) {
        console.log('clicked' + id)
        deleteTodoApi(username, id)
            .then(
                () => {
                    setMessage(`Delete of todo with id = ${id} successful`)
                    refreshTodos()
                }
            )
    }

    function updateTodo(id) {
        console.log('clicked' + id)
        navigate(`/todo/${id}`)
    }

    function addNewTodo() {
        navigate(`/todo/-1`)
    }

    return (
        <>
            <div className="container">
                <h1>Things You Want To Do!</h1>
                {message && <div className="alert alert-warning">{message}</div>}
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Description</th>
                                <th>Is Done?</th>
                                <th>Target Date</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map(
                                    todo => (
                                        <tr key={todo.id}>
                                            {/* <td>{todo.id}</td> */}
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate}</td>
                                            <td> <button className="btn btn-warning"
                                                onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                            <td> <button className="btn btn-success"
                                                onClick={() => updateTodo(todo.id)}>Update</button></td>
                                        </tr>
                                    )
                                )
                            }

                        </tbody>
                    </table>
                </div>
                <div className="btn btn-success m-2" onClick={addNewTodo}>Add New Todo</div>
            </div>
        </>
    )
}

