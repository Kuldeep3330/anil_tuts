import { useContext } from "react"
import { CounterContext } from "./CounterContext"


function Counter(){
    const{state, dispatch}= useContext(CounterContext)

    return(
        <>
        <h1>Count: {state.count}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>
            Increment
        </button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>
            Decrement
        </button>
        </>
    )

}

export default Counter