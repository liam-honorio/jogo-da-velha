import React from 'react';
import './styles.css';
import LabelGame from '../LabelGame';
import InputGame from '../InputGame';

const InputCheckbox = ({ id = "", value = "", content = "", onClick}) => (
  <>
    <InputGame id={id} value={value} type="checkbox" content={content} />
    <LabelGame onClick={onClick} htmlFor={id} content ={content}/>
  </>
);

export default InputCheckbox;