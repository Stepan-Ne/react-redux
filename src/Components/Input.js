import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';

function Input(props) {

    const {label, name, ...restProps} = props
    return (
        <div className='field'>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...restProps}/>
            <ErrorMessage name={name} component={TextError}/>
            
        </div>
    )
}

export default Input;