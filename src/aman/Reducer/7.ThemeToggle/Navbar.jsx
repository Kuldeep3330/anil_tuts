import { useContext } from "react";
import { themeContext } from "./themeContext";


function Nabar() {
    const { theme, dispatch } = useContext(themeContext);

    return(
        <div >
            <button onClick={()=>dispatch({type:"TOGGLE_THEME"})}>

                switch to theme
            </button>
        </div>
    )
}

export default Nabar;