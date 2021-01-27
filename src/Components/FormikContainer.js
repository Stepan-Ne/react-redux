import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikKontrol from './FormikKontrol';

function FormikContainer() {
  const dropDownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'value 1', value: 'value 1' },
    { key: 'value 2', value: 'value 2' },
    { key: 'value 3', value: 'value 3' },
  ];
  const radioOptions = [
    { key: 'value 1', value: 'value 1' },
    { key: 'value 2', value: 'value 2' },
    { key: 'value 3', value: 'value 3' },
  ];

  const initialValues = {
    email: '',
    selectOption: '',
    radioOption: ''
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required')
  });
  const onSubmit = (values) => console.log('Form Data', values);
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formik) => (
        <Form className='ui form'>
            
          <FormikKontrol control='input' type='email' label='Email' name='email' />

          <FormikKontrol control='select' 
          label='Select a topic' name='selectOption' options={dropDownOptions}/>

          <FormikKontrol control='radio'
          label='Radio Topic' name='radioOption' options={radioOptions}/>

          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
