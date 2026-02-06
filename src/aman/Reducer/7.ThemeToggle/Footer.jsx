import { useContext } from "react";
import { themeContext } from "./themeContext";
function Footer(){
    const {theme}= useContext(themeContext)
    return(
        <div style={{padding:"20px"}}>
            Footer theme:{theme}
            </div>
    )
}


export default Footer;