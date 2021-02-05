import React from 'react';
import '../App';


function About() {
  return (
    <div className='about'>
      <h2> In this application I have used:</h2>
     
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Libraries</th>
      <th scope="col">Functions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>React</td>
      <td>useState, useEffect</td>
     
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Redux</td>
      <td>createStore, combineReducers, compose, applyMiddleware</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>React-Redux</td>
      <td>connect, useSelector, useDispatch, Provider</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>React-Router-Dom</td>
      <td>BrowserRouter, Route, Switch, NavLink</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Rdux-Thunk</td>
      <td>thunk</td>
    </tr>

  </tbody>
</table>
    </div>
  )
}

export default About
