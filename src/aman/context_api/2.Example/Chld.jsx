import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Child(){

    const theme = useContext(ThemeContext);

    return(
        <>
        <h1>Theme is {theme}</h1>
        </>
    )


}

export default Child;