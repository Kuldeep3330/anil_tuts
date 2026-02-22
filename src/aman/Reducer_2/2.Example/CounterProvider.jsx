import { useReducer } from "react"
import { counterReducer } from "./CounterReducer"
import { counterContext } from "./CounterContext"

const initialState={count:0}
function CounterProvider({children}){
    const[state, dispatch]=useReducer(counterReducer, initialState)
    return(
        <counterContext.Provider value={{state, dispatch}}>
            {children}
        </counterContext.Provider>
    )
}

export default CounterProvider