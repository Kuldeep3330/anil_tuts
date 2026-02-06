import CounterProvider from "./CounterProvider";
import MyCounter from "./MyCounter";


function Counter(){
    return(
        <CounterProvider>
            <MyCounter/>

        </CounterProvider>
    )

}

export default Counter;