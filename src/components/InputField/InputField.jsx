import React from 'react'

import { classNames } from './../../utils/classNames'

import InlineError from './../InlineError/InlineError';

import './InputField.scss'

function InputField(props) {
  const { id, name, type, value, placeholder, required, onChange, labelText, errors } = props;

  const inputFieldClasses = classNames(
    `o-input-field__field`,
    type && `o-input-field__field--${type}`,
    errors && `has-error`
  );

  return(
    <div className="o-input-field">
      <label htmlFor={name} className="o-input-field__label">{ labelText }</label>

      <input type={type} id={id} name={name} value={value} placeholder={placeholder} className={inputFieldClasses} required={required} onChange={onChange} />

      { errors && <InlineError text={errors} />}
    </div>
  )
}

export default InputField;