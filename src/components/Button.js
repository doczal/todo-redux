import React from 'react';
import './Button.css';

const Button = ({ color, children, onClick }) => (
  <button
    className="btn"
    style={{ 'backgroundColor': color }}
    onClick={onClick}
  >
    { children }
  </button>
);

export default Button;