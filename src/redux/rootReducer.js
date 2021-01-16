const rootReducer = (state, action) => {
switch(action.type) {
    case 'INC':
        return {
            ...state,
            count: +state.count + 1
        };
    case 'DEC':
       return {
           ...state,
           count: +state.count - 1
       };
    default:
        return state;

}
}

// ACTIONS
export const incAC = (op) => ({type: op})

export default rootReducer;