import { useContext } from "react";
import { themeContext } from "./themeContext";


function Content(){

    const {theme}= useContext(themeContext)
    return(
        <div
        style={{
            padding:"20px",
            backgroundColor:theme==="light"?"#fff":"#333",
            color:theme==="light"?"#333":"#fff",
            minHeight:"200px"
        }}>
            <h2>current theme: {theme}</h2>

        </div>
    )
}

export default Content;