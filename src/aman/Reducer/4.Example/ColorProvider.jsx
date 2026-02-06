import { useReducer } from "react"
import { colorContext } from "./colorContext"
import { colorReducer } from "./colorReducer";

const initialState={color:'red'}
function ColorProvider({children}){
    const [state, dispatch] = useReducer(colorReducer, initialState);

    return(
        <colorContext.Provider value={{state, dispatch}}>
            {children}
        </colorContext.Provider>
    )

}

export default ColorProvider