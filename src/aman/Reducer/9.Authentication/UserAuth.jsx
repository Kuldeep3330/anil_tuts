import { useContext } from "react"
import { authContext } from "./authContext"

function UserAuth(){
    const{state, dispatch}= useContext(authContext)

    console.log("state", state)
    console.log("dispatch", dispatch)  
    const handleLogin=()=>{
        const fakeUser={name:"AMAN", email:"aman@example.com", id: 1, role: "admin"}
        dispatch({type:"LOGIN", payload: fakeUser})
    } 
    const handleLogout=()=>{
        dispatch({type:"LOGOUT"})
    }

    return(
        <>
        {
            !state.user ? <div>
            <h1>Please Login</h1>
            <button onClick={handleLogin}>login</button>
            </div> : <div><h1>welcome {state.user.name}</h1> <button onClick={handleLogout}>logout</button></div>
        }
        </>
        
    )

}

export default UserAuth