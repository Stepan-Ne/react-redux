import React from 'react';
import {Field, ErrorMessage} from 'formik';

function RadioButton(props) {

    const {label, name, options, ...restProps} = props
    return (
        <div className='field'>
            <label htmlFor={name}>{label}</label>
            <Field name={name} {...restProps}>
                { ({ field }) => {
                    console.log(field)
                    return options.map(op => {
                       
                        return (
                            <React.Fragment key={op.key}>

                            <input 
                            type='radio'
                            id={op.value} 
                            // {...field} 
                            value={op.value}
                            checked={field.value === op.value}
                            onChange={() => console.log(field)} />

                            <label htmlFor={op.name}>{op.key}</label>

                            </React.Fragment>
                        )
                    })
                }}
            </Field>
        </div>
    )
}

export default RadioButton
