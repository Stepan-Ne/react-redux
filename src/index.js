import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

let rerender = (state, dispatch) => {
  ReactDOM.render(
  <React.StrictMode>
    <App state={state} dispatch={dispatch}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
rerender(store.getState(), store.dispatch.bind(store))

store.subscribe(() => {
let state = store.getState()
let dispatch = store.dispatch.bind(store)

rerender(state, dispatch)

})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
