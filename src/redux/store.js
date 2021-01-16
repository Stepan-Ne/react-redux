import postsReducer from './postsReducer';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// when action fly we need to change state with reducer
// reducer returns the obj - state

// const createStore = (reducer, initState) => {

//     // private
// let state = reducer(initState, {type: '__INIT__'})
// const subscribers = []

//     //public
//     return {
// getState() {
//     return state;
// },
// dispatch(action) {
//     state = reducer(state, action)
//     //уведомляем подписчиков
//     subscribers.forEach(sub => sub())
// },
// subscribe(callback) {
// subscribers.push(callback)
// }
//     }
// }



// REDUX
const rootReducer = combineReducers({
  posts: postsReducer
})

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

//window.store = store;

export default store;