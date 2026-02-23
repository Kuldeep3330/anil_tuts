import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { todoContext } from "./todoContext";


function TodoProvider({children}){
    const[state, dispatch]=useReducer(todoReducer, [])
    return(
        <todoContext.Provider value={{state, dispatch}}>
            {children}
        </todoContext.Provider>
    )
}

export default TodoProvider;