import React from 'react';
import Label from '../Label';
import './styles.css';

const Input = ({ id, value, content }) => (
  <>
    <input type="checkbox" id={id} value={value} className="input" />
    <Label htmlFor={id} content ={content}/>
  </>
);

export default Input;