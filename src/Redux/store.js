import postsReducer from './postReducer';
import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    posts: postsReducer
})
const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;