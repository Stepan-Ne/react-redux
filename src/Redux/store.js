import postsReducer from './postReducer';
import {combineReducers, createStore, compose} from 'redux';


const rootReducer = combineReducers({
    posts: postsReducer
})
const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;