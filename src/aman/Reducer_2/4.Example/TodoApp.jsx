import { useContext, useState } from "react";
import { todoContext } from "./todoContext";

function TodoApp(){

    const{state:todos, dispatch}=useContext(todoContext);
    const[input, setInput]=useState("")

    const handleAdd=()=>{
        if(!input.trim()) return;
        dispatch({
            type:"ADD_TODO",
            payload:input
        });
        setInput("")
    }

    return(<div style={{textAllign:"center"}}>
        <h2>Global todo App</h2>
        <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter todo" />
        <button onClick={handleAdd}>Add</button>
        <ul style={{listStyle:"none"}}>

            {
                todos.map(todo=>(
                    <li key={todo.id}>
                        <span
                        onClick={()=>dispatch({type:"TOGGLE_TODO", payload:todo.id})}
                        style={{textDecoration:todo.completed?"line-through":"none"}}
                        >{todo.text}</span>

                        <button
                        onClick={()=>dispatch({ type: "DELETE_TODO", payload: todo.id })}
                        >❌</button>

                    </li>
                ))
            }
        </ul>
    </div>)

}

export default TodoApp