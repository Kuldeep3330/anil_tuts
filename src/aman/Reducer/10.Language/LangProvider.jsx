import { useReducer } from "react";
import { langContext } from "./langContext";
import { langReducer } from "./langReducer";

const initialState={
    language: "english"
}

function LangProvider({children}) {
    const [state, dispatch]= useReducer(langReducer, initialState)
    return(
        <langContext.Provider value={{state, dispatch}}>
            {children}
        </langContext.Provider>
    )

}

export default LangProvider;