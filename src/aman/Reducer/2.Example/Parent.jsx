import Counter from "./Counter";
import CounterProvider from "./counterProvider";


function Parent(){
    return(
        <CounterProvider>
            <Counter/>

        </CounterProvider>
    )
}
export default Parent;