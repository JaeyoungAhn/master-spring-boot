import { retrieveAllTodosForUsernameApi } from "./api/TodoApiService copy"
import { useState } from "react"
import { deleteTodoApi } from "./api/TodoApiService copy"
import { useEffect } from "react"

export default function ListTodosComponent() {

    const today = new Date()

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])

    const [message,setMessage] = useState([])

    useEffect( () => refreshTodos(), [])
    // const todos = [
    //         {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
    //         {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate},
    //         {id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate}
    //     ]

    function refreshTodos() {
        retrieveAllTodosForUsernameApi('spring').
        then(reponse => {
            setTodos(reponse.data)
        }
        
        )
        .catch(error => console.log(error))
    }
    

    function deleteTodo(id) {
        console.log('clicked' + id)
        deleteTodoApi('spring', id)
        .then (
            () => {
                setMessage(`Delete of todo with id = ${id} successful`)
                refreshTodos()
            }
        )
    }

    return (
        <>
            <div className="container">
                <h1>Things You Want To Do!</h1>
                {message && <div className="alert alert-warning">{message}</div> }
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Is Done?</th>
                                <th>Target Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map(
                                    todo => (
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate}</td>
                                            <td> <button className="btn btn-warning"
                                                onClick={() => deleteTodo(todo.id)}>Delete</button></td>
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

