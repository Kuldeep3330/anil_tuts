import { useContext, useState } from "react"
import { CounterContext } from "./CounterContext";

function Counter(){   
    const{state, dispatch}=useContext(CounterContext)
    return(
        <>
        <p>{state.count}</p>
        <button onClick={()=>dispatch({type:"INCREMENT"})} >Increase</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>decrease</button>
        </>
    )

}

export default Counter