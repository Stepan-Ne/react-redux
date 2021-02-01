import React from 'react';
import Nav from './components/Nav';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import List from './components/List';
import WithRouterItem from './components/Item';
import './App.css';

function App() {
  return (
    <div className='App'>
     <Nav />
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route path='/about'component={About}/>
       <Route exact path='/list' component={List}/>
       <Route path='/list/:id' component={WithRouterItem}/>
     </Switch>
    </div>
  );
}

export default App;
