import React from 'react';
import Counter from './Components/Counter';

function App(props) {
  return (
    <div className="App">
      <Counter {...props} />
    </div>
  );
}

export default App;
