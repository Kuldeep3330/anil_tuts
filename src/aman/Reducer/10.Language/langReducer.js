

export const langReducer=(state, action)=>{
    switch(action.type){
        case "ENGLISH":
            return{
                ...state,
                language: "english"
            }
        case "HINDI":
            return{
                ...state,
                language: "hindi"
            }
        default:
            return state
    }
}