import React from 'react';
import './styles.css';
import LabelGame from '../LabelGame';
import InputGame from '../InputGame';


const InputCheckbox = ({ id = "", value = "", content = ""}) => (
  <>
    <InputGame id={id} value={value} type="checkbox" content={content} />
    <LabelGame htmlFor={id} content ={content}/>
  </>
);

export default InputCheckbox;