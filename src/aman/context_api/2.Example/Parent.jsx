import Child from "./Chld";
import { ThemeContext } from "./ThemeContext";

function Parent(){
    return(
        <ThemeContext.Provider value="dark">
            <Child/>
            </ThemeContext.Provider>
    )
}

export default Parent;