import React from 'react';

const InputGame = ({ id = "", value = "", type = "text" }) => (
  <>
    <input className="input-game" type={type} id={id} value={value} />
  </>
);

export default InputGame;