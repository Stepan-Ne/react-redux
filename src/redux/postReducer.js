const FETCH_POSTS = 'FETCH_POSTS';
const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';
const initState = {
  posts: []
};

const postReducer = (state = initState, action) => {
  
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: [...action.posts]
      };

    default:
      return state;
  }
};

// AC

export const fetchPostsAC = (posts) => ({
  type: FETCH_POSTS,
  posts,
});

// This is an action creator that returns a thunk:
// 1. we dispatch thunk & redux put dispacth to the thunk as arg
// => redux calls thunk with dispatch this thunk;
// 2. dispath(thunkCreator(post))
// thunkCreator = (post) => (dispatch) => ...;
// 3. but store can`t dispatch function - only plain obj = {type:...}
// middleware solves this problem: import thunk from "redux-thunk";

// export const fetchPostsThunk = (dispatch) => {
//   fetch('https://jsonplaceholder.typicode.com/posts?_limit=5').then(data => data.json())
//   .then(res => dispatch(fetchPostsAC(res)))
// }

export function fetchPostsThunk() {
  return async (dispatch) => {
    const data = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
    const response = await data.json();
    dispatch(fetchPostsAC(response))
  };
}
export default postReducer;
