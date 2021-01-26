import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';
import TextError from '../TextError';

// STYLES
const styles = {
  error: {
    color: 'red',
    marginTop: '.5rem',
  },
};
// FORMIK

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phNumbers: [''],
};
const onSubmit = (values, onSubmitProps) => {
  console.log('VALUES: ', values);
  console.log('onSubmitProps', onSubmitProps);
  onSubmitProps.setSubmitting(false)
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  comments: Yup.string(),
});
const validateComments = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  }
  return error;
};

// COMPONENTS

const FormFormik = () => {
  // const formik = useFormik({
  //     initialValues,
  //     onSubmit,
  //     validationSchema
  // })
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      // validateOnChange={false}
      // validateOnBlur={false}
      validateOnMount
    >
      {(formik) => {
        console.log('FORMIK', formik.isValid);
        return (
          <Form className='ui form'>
            <div className='field'>
              <label>First Name</label>
              <Field placeholder='First Name' type='text' name='firstName' />
              <ErrorMessage name='firstName' component={TextError} />
            </div>

            <div className='field'>
              <label>Last Name</label>
              <Field placeholder='Last Name' type='text' name='lastName' />
              <ErrorMessage name='lastName'>
                {(errorMsg) => <div className='error'>{errorMsg}</div>}
              </ErrorMessage>
            </div>

            <div className='field'>
              <label>Email</label>
              <Field placeholder='email' type='email' name='email' />
              <ErrorMessage name='email' />
              <label htmlFor='comments'>Comments</label>
              <Field type='text' name='comments' as='textarea' />
            </div>

            <div className='field'>
              <div className='ui checkbox'>
                <input type='checkbox' className='hidden' tabIndex='0' />
                <label>I agree to the Terms and Conditions</label>
              </div>
            </div>

            <div className='form-control'>
              <label htmlFor='address'>Address</label>
              <FastField name='address' validate={validateComments}>
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input type='text' id='address' {...field} />
                      {/* {meta.touched && meta.error ? <div>{meta.error}</div> : null} */}
                    </div>
                  );
                }}
              </FastField>
              <ErrorMessage name='address' component={TextError} />
            </div>

            <div className='form-control'>
              <label htmlFor='facebook'>Facebook</label>
              <Field type='text' name='social.facebook' id='facebook' />
            </div>

            <div className='form-control'>
              <label htmlFor='twitter'>Twitter</label>
              <Field type='text' name='social.twitter' id='twitter' />
            </div>

            <div className='form-control'>
              <label htmlFor='phNumbers'>List of phone numbers</label>
              <FieldArray name='phNumbers'>
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values; // arr

                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index} className='form-control'>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type='button' onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                          <button type='button' onClick={() => push('')}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            <div>
              <button type='submit' className='ui button' 
              disabled={!formik.isValid || formik.isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormFormik;
