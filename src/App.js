import React from 'react';
import MyPostContainer from './Components/MyPostContainer';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import FormFormik from './Components/FormikForm';

function App(props) {
  return (
    <div className="App">
     <MyPostContainer />
     {/* <FormFormik /> */}
    </div>
  );
}

export default App;
