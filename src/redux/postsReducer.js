const initState = {
  posts: [
    {id: 1, message: 'Hello World!'}
  ]
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    
    default:
      return state;
  }
};

// ACTIONS


// THUNK


export default rootReducer;
