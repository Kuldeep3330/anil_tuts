import { AuthContext } from "./AuthContext";
import Dashboard from "./Dashboard";


function App() {
    const user={
        name:"John Doe",
        role:"admin",
    }

    return(
        <AuthContext.Provider value={user}>
            <Dashboard/>
        </AuthContext.Provider>
    )
}


export default App;