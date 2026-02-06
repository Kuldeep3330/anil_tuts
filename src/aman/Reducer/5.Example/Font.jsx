import Children from "./Children";
import FontProvider from "./FontProvider";

function Font(){
    return(
        <FontProvider>
            <Children/>
        </FontProvider  >
    )
}

export default Font