import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";


const initialState={
    isLoggedIn:false,
    user:null,
}
function AuthProvider({children}) {
    const[state,dispatch]=useReducer(AuthReducer,initialState);
    return(
    <AuthContext.Provider value={{state,dispatch}}>
        {children}
    </AuthContext.Provider>
    )

}

export default AuthProvider;