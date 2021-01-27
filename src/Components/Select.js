import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';

function Select(props) {
  const { label, name, options, ...restProps } = props;

  return (
    <div className='field'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} as='select' {...restProps}>
        {options.map((op) => {
          return (
            <option key={op.value} value={op.value}>
              {op.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Select;
