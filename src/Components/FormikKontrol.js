import React from 'react'
import Input from './Input';
import Select from './Select';
import RadioButton from './RadioButton';

function FormikKontrol(props) {

    const {control, ...restProps} = props
    switch (control) {
        case 'input':
            return <Input {...restProps}/>
        case 'textarea':
        case 'select':
            return <Select {...restProps}/>
        case 'radio':
            return <RadioButton {...restProps}/>
        case 'checkbox':
        case 'date':
        
        default:
           return null;
    }
}

export default FormikKontrol;
