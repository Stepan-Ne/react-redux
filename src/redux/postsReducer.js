import { UPDATE_MESSAGE, SEND_MESSAGE } from '../redux/actions';

const initState = {
  posts: [{ id: 1, message: 'Hello World!' }],
  textOfPost: 'lala'
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
        posts: [...state.posts, {id: Date.now(), message: state.textOfPost}],
        textOfPost: ''
      };
      
    default:
      return state;
  }
};

// ACTIONS

// THUNK

export default rootReducer;
