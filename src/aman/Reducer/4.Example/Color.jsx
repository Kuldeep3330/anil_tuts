import Children from "./Children";
import ColorProvider from "./ColorProvider";


function Color(){
    return(
        <ColorProvider>
            <Children/>
        </ColorProvider>
    )
}

export default Color;