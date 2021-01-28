import {CREATE_POST} from './actions';

const initState = {
    posts: [],
    fetchedPosts: []
}

const postReducer = (state = initState, action) => {
switch (action.type) {
    case CREATE_POST:
        return {
            ...state,
            posts: [...state.posts, {...action.payload}]
        };

    default:
        return state;
}
   
}

export default postReducer;