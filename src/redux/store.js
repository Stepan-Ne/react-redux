import rootReducer from './rootReducer';
import { createStore, applyMiddleware, compose } from 'redux'
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

const initState = {count: 0};
const store = createStore(rootReducer, initState, compose(applyMiddleware(thunk, logger),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

window.store = store;

export default store;