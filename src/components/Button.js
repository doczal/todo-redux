import React, { Component } from 'react';
import './Button.css';

const Button = ({ color, children }) => (
  <button
    className="btn"
    style={{ 'backgroundColor': color }}
  >
    { children }
  </button>
);

export default Button;