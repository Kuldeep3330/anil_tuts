import { useReducer, useState } from "react";
import { todoReducer } from "./TodoReducer";


function TodoApp(){
    const [todos, dispatch]=useReducer(todoReducer, [])
    const[input, setInput]=useState("")

    const handleAdd=()=>{
        dispatch({
            type:"ADD_TODO",
            payload:input
        })
        setInput(" ")
    }
       
    return(
        <div style={{textAlign:"center"}}>
            <h2>Todo App</h2>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)} 
            placeholder="Enter todo"
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {
                    todos.map(todo=>(
                        <li key={todo.id}>
                            <span
                            onClick={()=>dispatch({type:"TOGGLE_TODO", payload:todo.id})}
                            style={{textDecoration:todo.completed?"line-through":"none"}}
                            >{todo.text}</span>
                            <button onClick={()=>dispatch({type:"DELETE_TODO",payload:todo.id })}>❌</button>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default TodoApp;