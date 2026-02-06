import { useReducer } from "react"
import { notificationContext } from "./notificationContext"
import { notificationReducer } from "./notificationReducer"


function NotificationProvider({children}) {
    const [notifications, dispatch] = useReducer(notificationReducer, [])
    return(
        <notificationContext.Provider value={{notifications, dispatch}}>
            {children}
        </notificationContext.Provider>
    )

}

export default NotificationProvider;