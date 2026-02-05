import { useContext } from "react";
import { AppContext } from "./context";

function Child(){
    const name=useContext(AppContext);
    return(
        <div >
            <h1>Child Component: {name}</h1>
        </div>
    )
}

export default Child;