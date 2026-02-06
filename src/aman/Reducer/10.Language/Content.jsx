import { langContext } from "./langContext"
import { useContext } from "react"


function Content(){
    const {state, dispatch}=useContext(langContext)
    console.log("state", state);
    console.log('dispatch', dispatch);
    
    const handleClick=()=>{
        dispatch({type:"HINDI"})
    }

    return(
        <>
        {
            state.language === "english" ? <div>Hello, how are you?
                <button onClick={handleClick}>switch lang</button>
            </div> : <h2>Hola, ¿cómo estás?</h2>

        }
        </>
    )

}

export default Content