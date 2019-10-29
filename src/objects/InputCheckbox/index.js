import React from 'react';
import './styles.css';
import LabelGame from '../LabelGame';
import InputGame from '../InputGame';

const handleClick = () => {
  console.log("Vamo que vamo!!!")
}

const InputCheckbox = ({ id = "", value = "", content = ""}) => (
  <>
    <InputGame id={id} value={value} type="checkbox" content={content} />
    <LabelGame onClick={handleClick} htmlFor={id} content ={content}/>
  </>
);

export default InputCheckbox;