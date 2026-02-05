import Child from "./Child";
import { AppContext } from "./context";

function Parent() {
    return(
        <AppContext.Provider value="Kuldeep">
            <div className="kuldeep">
                <Child/>
            </div>
        </AppContext.Provider>
    )
}
export default Parent;