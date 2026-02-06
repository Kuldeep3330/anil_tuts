import { useContext, useEffect, useRef } from "react"
import { colorContext } from "./colorContext"


function Children(){
    const{state, dispatch}= useContext(colorContext)
    const ref = useRef(null);

    useEffect(()=>{
        console.log(ref.current);
        ref.current.style.backgroundColor=state.color

    }, [state.color])

    return(
        <div style={{width:"100vw", height: "100vh"}} ref={ref}>
        
        <button onClick={()=>dispatch({type:"RED"})}>Red</button>
        <button onClick={()=>dispatch({type:"YELLOW"})}>Yellow</button>
        <button onClick={()=>dispatch({type:"BLUE"})}>Blue</button> 
        </div>

    )

}

export default Children