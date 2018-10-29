import React, { Component } from 'react';
import './Todo.css';

const Todo = ({ task, complete }) => (
  <li className={`todo ${complete ? 'complete' : ''}`}>
    <div className="todo-content">
      <div className="todo-status"></div>
      { task }
    </div>
    <button className="todo-del">DEL</button>
  </li>
);

export default Todo;