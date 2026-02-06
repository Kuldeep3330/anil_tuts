import { authContext } from "./authContext";
import { useReducer } from "react";
import { authReducer } from "./authReducer";

const initialState={
    isLoggedIn: false,
    user: null
}
function AuthProvider({ children }) {
    const [state, dispatch]= useReducer(authReducer, initialState)


    return(
        <authContext.Provider value={{state, dispatch}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;