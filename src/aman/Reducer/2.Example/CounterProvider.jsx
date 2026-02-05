import { counterReducer } from "./counterReducer";
import { CounterContext } from "./CounterContext";
import { useReducer } from "react";

const initialState={count:0};

function CounterProvider({children}) {
    const[state,dispatch]=useReducer(counterReducer,initialState);
    return(
        <CounterContext.Provider value={{state,dispatch}}>
        {children}
        </CounterContext.Provider>
    )


}


export default CounterProvider;