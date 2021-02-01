import React, { useState } from 'react';
import '../App';

function FormSubmit() {

  const [state, setState] = useState('');

  function handleInput(e) {
    setState(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log(state);
    
  }

  return (
    <form className='form'>
      <div className='mb-3'>
        <label htmlFor='post' className='form-label'>
          Password
        </label>
        <input
          type='text'
          className='form-control'
          id='post'
          value={state}
          onChange={handleInput}
        />
      </div>
      <button type='submit' className='btn btn-primary' onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
}

export default FormSubmit;
