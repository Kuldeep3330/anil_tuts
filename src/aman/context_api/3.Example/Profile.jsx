import {useContext} from"react"
import { AuthContext } from "./AuthContext";

function Profile(){
    const user = useContext(AuthContext);
    return(
        <>
        <h1>Name:{user.name}</h1>
        <h2>Role:{user.role}</h2>
        </>
    )

}

export default Profile;