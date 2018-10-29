import React, { Component } from 'react';
import './Button.css';

const Button = ({ color, children }) => (
  <button
    className="btn"
    style={{ 'background-color': color }}
  >
    { children }
  </button>
);

export default Button;