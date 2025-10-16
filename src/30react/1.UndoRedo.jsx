/**
Create a Counter App with the following features:
Show a number (the counter).
Buttons: Increment, Decrement, Undo, and Redo.
Counter can’t go below 0.
Undo should revert to the previous value.
Redo should move forward (if possible).
 */

import { useState } from "react"

function UndoRedo_1(){
    const[count, setCount]=useState(0);
    const [past, setPast]=useState([])
    const [future, setFuture]=useState([])

    const increment=()=>{
        setPast([...past, count]);//// save current count to past
          
        setCount(prev=>prev+1);     
        setFuture([]); // clear redo history       
    }
    const decrement=()=>{
        setPast([...past, count]);

        setCount(prev=> prev>0?prev-1:0);        
        setFuture([]);
    }
    const undo=()=>{
        if(past.length === 0) return;
        const previous = past[past.length-1];
        const newPast= past.slice(0, past.length-1);// removed last value from past

        setFuture([count, ...future])        
        setPast(newPast);       
        setCount(previous);
    }
    const redo=()=>{
        if(future.length === 0) return;
        const next=future[0];
        const newFuture=future.slice(1);

        setPast([...past, count]);
        setFuture(newFuture)
        setCount(next);       
    }    

    return(
        <div style={{textAlign:"center", marginTop:"50px"}}>
            <h1>Counter:{count}</h1>
            <div style={{display:"flex", justifyContent:"center", gap:"10px"}}>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={undo}>Undo</button>
            <button onClick={redo}>Redo</button>
            </div>
        </div>
    )

}

export default UndoRedo_1
