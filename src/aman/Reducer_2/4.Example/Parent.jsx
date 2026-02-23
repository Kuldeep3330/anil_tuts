import TodoProvider from "./TodoProvider";
import TodoApp from "./TodoApp";

function Parent(){
    return(
        <TodoProvider>
            <TodoApp/>
        </TodoProvider>
    )

}

export default Parent;