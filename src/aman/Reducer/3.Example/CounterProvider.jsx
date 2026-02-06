import { useReducer } from "react";
import { CounterContext } from "./CounterContext";
import { counterReducer } from "./counterReducer";

const initialState={
    count:0
}

function CounterProvider({ children }) {
     const [state, dispatch]=useReducer(counterReducer, initialState)
    return(       
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    )

}

export default CounterProvider;