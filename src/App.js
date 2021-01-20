import React from 'react';
import MyPostContainer from './Components/MyPostContainer';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Form from './Components/FormikForm';

function App(props) {
  return (
    <div className="App">
     {/* <MyPostContainer /> */}
     <Form />
    </div>
  );
}

export default App;
