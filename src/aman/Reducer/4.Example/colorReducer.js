

export const colorReducer = (state, action) => {
    switch (action.type) {
        case "RED":
            return { color: "red" };
        case 'YELLOW':
            return { color: "yellow" };
        case "BLUE":
            return { color: "blue" };
        default:
            return state;
    }
}