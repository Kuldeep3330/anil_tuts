import { useContext } from "react";
import { AuthContext } from "./AuthContext";


function Home(){
    const {state, dispatch}=useContext(AuthContext)

    return(
        <div>
      <h2>
        {state.isLoggedIn
          ? `Welcome ${state.user.name}`
          : "Please Login"}
      </h2>

      {!state.isLoggedIn && (
        <button
          onClick={() =>
            dispatch({
              type: "LOGIN",
              payload: { name: "Kuldeep" }
            })
          }
        >
          Login
        </button>
      )}

      {state.isLoggedIn && (
        <button onClick={() => dispatch({ type: "LOGOUT" })}>
          Logout
        </button>
      )}
    </div>
  );
}


export default Home;