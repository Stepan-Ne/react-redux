import { UPDATE_MESSAGE, SEND_MESSAGE, SET_POSTS } from '../redux/actions';

const initState = {
  posts: [{ userId: 10101, id: 1010, title: 'Title', body: 'Hello World!'}],
  textOfPost: ''
};

const rootReducer = (state = initState, action) => {
  
  switch (action.type) {
    case UPDATE_MESSAGE:
      return {
        ...state,
        textOfPost: action.text
      };
      case SEND_MESSAGE:
      return {
        ...state,
        posts: [{userId: Date.now(), id: Date.now(), body: state.textOfPost, title: 'Title'},
         ...state.posts ],
        textOfPost: ''
      };
      case SET_POSTS: 
      return {
        ...state,
        posts: [...state.posts, ...action.posts.data]
      }
      
    default:
      return state;
  }
};

// ACTIONS

// THUNK

export default rootReducer;
