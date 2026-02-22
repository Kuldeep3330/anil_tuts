import { AppContext } from "./content";
import Child from "./Child";

const obj = {
    name: "kuldeep",
    lastname: "rajput"
};

function Parent(){
    return(
        <AppContext.Provider value={obj}>
            <div>
                <Child/>
            </div>
        </AppContext.Provider>
    )
}

export default Parent;