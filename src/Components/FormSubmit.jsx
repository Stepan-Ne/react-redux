import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {sendPostThunkCreator} from '../redux/postReducer';
import '../App';

function FormSubmit() {
  const [state, setState] = useState('');
  const [alert, setAlert] = useState(false);

  const dispatch = useDispatch()

  function handleInput(e) {
    setState(e.target.value);
    setAlert(false);
  }
  function submitHandler(e) {
    e.preventDefault();
    if (state.trim()) {
      dispatch(sendPostThunkCreator(state))
    } else {
      setAlert(true);
    }
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

      {alert ? (
        <div class='alert alert-danger' role='alert'>
          The field is empty!
        </div>
      ) : null}

      <button type='submit' className='btn btn-primary' 
      disabled={state ? false : true}
      
      onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
}

export default FormSubmit;
