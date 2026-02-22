import Counter from "./Counter";
import CounterProvider from "./CounterProvider";

function Parent(){
    return (
        <CounterProvider>
            <Counter/>
        </CounterProvider>
    )
}

export default Parent