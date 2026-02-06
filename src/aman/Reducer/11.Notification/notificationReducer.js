export const notificationReducer = (state, action) => {
    switch(action.type){
        case "ADD":
            return [...state, action.payload]
        case "REMOVE":
            return state.filter(notification => notification.id !== action.payload)
        default:
            return state
    }
}