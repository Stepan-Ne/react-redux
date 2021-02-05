import { showLoaderAC, hideLoaderAC } from './appReducer';

const FETCH_POSTS = 'FETCH_POSTS';
const SEND_POST = 'SEND_POST';

const initState = {
  posts: [],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: [...action.posts],
      };
      case SEND_POST:
        return {
          ...state,
          posts: [action.post, ...state.posts]
        }

    default:
      return state;
  }
};

// AC

export const fetchPostsAC = (posts) => ({
  type: FETCH_POSTS,
  posts,
});

export const sendPostAC = (post) => ({
  type: SEND_POST,
  post
})

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

// GET Posts
export function fetchPostsThunk() {
  return async (dispatch) => {
    try {
      dispatch(showLoaderAC());
    const data = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=2'
    );
    const response = await data.json();
    setTimeout(() => {
      dispatch(fetchPostsAC(response));
      dispatch(hideLoaderAC());
    }, 500);
    } catch (error) {
      throw error
    }
    
  };
};


// SEND Post
export function sendPostThunkCreator(postText) {
return async (dispatch) => {
  dispatch(showLoaderAC());
  const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: postText,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  const response = await data.json()
  setTimeout(() => {
    dispatch(sendPostAC(response));
    dispatch(hideLoaderAC());
  }, 500);
}
}
export default postReducer;
