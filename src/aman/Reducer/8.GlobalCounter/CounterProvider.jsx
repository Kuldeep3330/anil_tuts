import { counterContext } from "./counterContext";
import { counterReducer } from "./counterReducer";
import { useReducer } from "react";
const initialState={
    count:0
}

function CounterProvider({children}){
    const [state, dispatch]= useReducer(counterReducer, initialState)
    return(
        <counterContext.Provider value={{state, dispatch}}>
            {children}
        </counterContext.Provider>
    )
}

export default CounterProvider;