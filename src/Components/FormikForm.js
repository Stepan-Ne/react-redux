import React from 'react';
import { Formik, useFormik } from 'formik';

const Form = () => {

const formik = useFormik({
    initialValues: {
        firstName: '',
        lastName: '',
        email: ''
    },
    handleChange: (data) => {console.log(data)},
    handleSubmit: () => {},
    handleBlur: () => {}

})

  return (
   
      <form className='ui form' onSubmit={formik.handleSubmit}>

        <div className='field'>
          <label>First Name</label>
          <input placeholder='First Name' 
          autoFocus
           type="text"
           name="firstName"
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.firstName}
          />
        </div>

        <div className='field'>
          <label>Last Name</label>
          <input placeholder='Last Name' 
          type="text"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          />
        </div>

        <div className='field'>
          <label>Email</label>
          <input placeholder='email' 
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          />
        </div>

        <div className='field'>
          <div className='ui checkbox'>
            <input type='checkbox' className='hidden' tabIndex='0' />
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div>

        <button type='submit' className='ui button'>
          Submit
        </button>

      </form>
   
  );
};

export default Form;
