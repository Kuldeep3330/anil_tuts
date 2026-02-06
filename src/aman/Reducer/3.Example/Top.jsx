import Counter from "./Counter"
import CounterProvider from "./CounterProvider"


function Top(){
    return(
        <CounterProvider>
            <Counter/>
        </CounterProvider>
    )

}

export default Top