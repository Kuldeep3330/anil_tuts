import { useContext } from "react"
import { authContext } from "./authContext"


function UserAuth() {
    const { state, dispatch } = useContext(authContext)
    const handleLogin = () => {
        const fakeUser = { name: "Aman", email: "aman@example.com" }
        dispatch({ type: "LOGIN", payload: fakeUser })
    }

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    return (<>
        {!state.user ? (
            <>
                <h2>Please Login</h2>
                <button onClick={handleLogin}>Login</button>
            </>
        ) : (
            <>
                <h3>Welcome, {state.user.name}</h3>
                <button onClick={handleLogout}>Logout</button>
            </>
        )}

    </>)

}

export default UserAuth