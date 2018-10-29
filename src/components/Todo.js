import React, { Component } from 'react';
import './Todo.css';
import Button from './Button';

const Todo = ({ task, complete }) => (
  <li className={`todo ${complete ? 'complete' : ''}`}>
    <div className="todo-content">
      <div className="todo-status"></div>
      { task }
    </div>
    <div className="todo-actions">
      <Button color='rgb(221, 174, 19)'>edit</Button>
      <Button color='rgb(221, 19, 53)'>del</Button>
    </div>
  </li>
);

export default Todo;