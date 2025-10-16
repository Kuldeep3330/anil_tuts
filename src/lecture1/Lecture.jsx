import { useState } from "react"

function Lecture(){
    const [display, setDisplay]= useState(true)

    const handleCLick=()=>{
        setDisplay(!display)
    }
    return(
        <>
        <h1>Toggle is Live</h1>
        <button onClick={handleCLick}>Toggle</button>
        {
            display?"kuldeep Kumar":null
        }
        </>
    )

}

export default Lecture