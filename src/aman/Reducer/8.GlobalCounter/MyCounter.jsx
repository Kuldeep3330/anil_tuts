import { useContext } from "react";
import { counterContext } from "./counterContext";


function MyCounter() {
   const{state, dispatch} = useContext(counterContext)

    return (
        <>
        <div> count is:{state.count}</div>
        <button onClick={(()=>dispatch({type:"INCREMENT"}))}>increase</button>
        <button onClick={(()=>dispatch({type:"DECREMENT"}))}>decrease</button>
        </>
    )
}

export default MyCounter;