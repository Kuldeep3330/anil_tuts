

export const fontReducer=(state, action)=>{
    switch(action.type){
        case "INCREASE":
            return state+2;
        case "DECREASE":
            return state-2;
        default:
            return state;
    }
}

