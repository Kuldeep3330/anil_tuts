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
    const [past, setPast]=useState([])//purani values (Undo ke liye)
    const [future, setFuture]=useState([])//undo ke baad wali values (Redo ke liye)

    /**
     * Action (inc/dec)
    → past push
    → count change
    → future clear
     */
    const increment=()=>{
        setPast([...past, count]);//current value ko past me save
         //past = [0,1,2,3,4]
         //count=5 
        setCount(prev=>prev+1);     
        setFuture([]); // redo history clear     
    }
    const decrement=()=>{
        setPast([...past, count]);

        setCount(prev=> prev>0?prev-1:0);        
        setFuture([]);
    }
    /**
     * Undo
    → past se nikala
    → count ko future me daala
    → count = previous
     */
    const undo=()=>{
        if(past.length === 0) return;
        const previous = past[past.length-1];//last saved value
        const newPast= past.slice(0, past.length-1);// past se last value hata di

        setFuture([count, ...future])//current count ko future ke front me daal diya        
        setPast(newPast);       
        setCount(previous);
    }
    /**
     * Redo
    → future se nikala
    → count ko past me daala
    → count = next
     */
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
            <button onClick={undo} disabled={past.length === 0}>Undo</button>
            <button onClick={redo} disabled={future.length === 0}>Redo</button>
            </div>
        </div>
    )

}

export default UndoRedo_1
