import React, { Component } from 'react';
import './Todo.css';

const Todo = ({ task, complete }) => (
  <li className={`todo ${complete ? 'complete' : ''}`}>
    <div className="todo-status"></div>
    { task }
  </li>
);

export default Todo;