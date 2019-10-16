import React from 'react';

const Input = ({ id = "", value = "", type = "text" }) => (
  <>
    <input className="input" type={type} id={id} value={value} />
  </>
);

export default Input;