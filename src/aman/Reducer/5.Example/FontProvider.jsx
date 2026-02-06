import { fontContext } from "./fontContext";
import { useReducer } from "react";
import { fontReducer } from "./fontReducer";

initialState={
    size:16
}
function FontProvider({children}){
    const[state, dispatch]=useReducer(fontReducer, initialState)
    
    return(
        <fontContext.Provider value={{fontSize:state, dispatch}}>
            {children}
        </fontContext.Provider>
    )

}

export default FontProvider