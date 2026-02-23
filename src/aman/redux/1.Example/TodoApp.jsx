import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleTodo } from "./todoSlice";


function TodoApp(){
    const[input, setInput]=useState("")
    const todos= useSelector(state=>state.todos);
    const dispatch=useDispatch()
    /**const{state:todos, dispatch}=useContext(todoContext); */

    const handleAdd=()=>{
        if(!input.trim()) return;
        dispatch(addTodo(input)); //
        /**
         * dispatch({
            type:"ADD_TODO",
            payload:input
        });
         */
        setInput("")
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Redux todo app</h2>
            <input type="text" vlaue={input} onChange={e=>setInput(e.target.value)} placeholder="enter todo" />
            <button onClick={handleAdd}>Add</button>
            <ul style={{listStyle:"none"}}>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <span
                        onClick={()=>dispatch(toggleTodo(todo.id))}
                        >{todo.text}</span>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>
                        ❌
                        </button>
                    </li>
                ))}
                
            </ul>

        </div>
    )
}

export default TodoApp

/**
Component
   ↓ dispatch(addTodo())
Slice Reducer
   ↓
Store Update
   ↓
useSelector re-runs
   ↓
Component re-render
 */

//important terms
//useSelector store se state lene ke liye
// useDispatch  action bhejne ke liye
//provider  store ko global bnane ke liye

