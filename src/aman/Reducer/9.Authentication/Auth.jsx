import AuthProvider from "./AuthProvider";
import UserAuth from "./UserAuth";



function Auth(){
    return(
        <AuthProvider>
            <UserAuth/>
        </AuthProvider>
    )

}

export default Auth;