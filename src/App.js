import React from 'react';
import MyPostContainer from './Components/MyPostContainer';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import FormFormik from './Components/FormikForm';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';

function App(props) {
  return (
    <div>
      <div className='ui  menu'>
        <NavLink
          to='/posts'
          className='orange item'
        >
          Posts
        </NavLink>
        <NavLink
          to='/form'
          className='orange item'
        >
          Form
        </NavLink>
      </div>
      <div className='App'>
        <Route path='/posts' render={() => <MyPostContainer />} />
        <Route path='/form' render={() => <FormFormik />} />
      </div>
    </div>
  );
}

export default App;
