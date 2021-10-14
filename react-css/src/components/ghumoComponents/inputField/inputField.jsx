import React from 'react'
import './inputField.style.scss';


function InputField({type,placeholder,id,lable,required}) {
    return (
        <div className='form__group'>
            <input type={type} className='form__input' placeholder={placeholder} id={id} required={required}/>
            <label for={id} className='form__label'>{lable}</label>
        </div>
    )
}

export default InputField
