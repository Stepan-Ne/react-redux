// const for types
const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';

const initState = {
  loader: false
}
// appReducer
const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loader: true
      };
      case HIDE_LOADER:
      return {
        ...state,
        loader: false
      }
  
    default:
     return state;
  }
}

// AC
export const showLoaderAC = () => ({
  type: SHOW_LOADER
})

export const hideLoaderAC = () => ({
  type: HIDE_LOADER
})


export default appReducer;