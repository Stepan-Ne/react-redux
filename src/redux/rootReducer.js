const rootReducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        count: +state.count + 1,
      };
    case 'DEC':
      return {
        ...state,
        count: +state.count - 1,
      };
    default:
      return state;
  }
};

// ACTIONS
export const incAC = (op) => ({ type: op });

// THUNK
export const asyncInc = () => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch({ type: 'INC' });
    }, 2000);
  };
};

export default rootReducer;
