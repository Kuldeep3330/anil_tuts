import Content from "./Content"
import LangProvider from "./LangProvider"


function Lang(){
    return(
        <LangProvider>
            <Content/>
        </LangProvider>
    )

}

export default Lang