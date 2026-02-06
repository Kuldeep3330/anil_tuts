import { useReducer } from "react";
import { themeReducer } from "./themeReducer";
import { themeContext } from "./themeContext";
const initialState={
    theme: "light"
}


function ThemeProvider({children}) {
    const [theme, dispatch] = useReducer(themeReducer, initialState.theme);
    return(
        <themeContext.Provider value={{ theme, dispatch }}>
        {children}
        </themeContext.Provider>
    )

}

export default ThemeProvider;