import React from 'react';
import './styles.css';

const LabelGame = ({ htmlFor, content, onClick }) => (
  <label onClick={onClick} htmlFor={htmlFor} className="label-game">{content}</label>
);

export default LabelGame;