import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import postReducer from './postReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  fetchPosts: postReducer,
  app: appReducer
})


//const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ))

export default store;