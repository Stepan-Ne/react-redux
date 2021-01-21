import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// STYLES
const styles = {
    error: {
        color: 'red',
        marginTop: '.5rem'
    }
}
// FORMIK

  const initialValues = {
        firstName: '',
        lastName: '',
        email: ''
    };
   const onSubmit = values => {
        console.log(values)
    };
    
    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required')
    })

const FormFormik = () => {

    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     validationSchema
    // })
  return (
   <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form className='ui form'>

        <div className='field'>
          <label>First Name</label>
          <Field placeholder='First Name' 
          autoFocus
           type="text"
           name="firstName"
          />
         <ErrorMessage name='firstName'/>
        </div>

        <div className='field'>
          <label>Last Name</label>
          <Field placeholder='Last Name' 
          type="text"
          name="lastName"
          />
          <ErrorMessage name='lastName'/>
        </div>

        <div className='field'>
          <label>Email</label>
          <Field placeholder='email' 
          type="email"
          name="email"
          />
           <ErrorMessage name='email'/>
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

      </Form>
      </Formik>
   
  );
};

export default FormFormik;
