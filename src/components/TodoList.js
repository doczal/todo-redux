import React, { Component } from 'react';
import './TodoList.css';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          task: 'Read a book',
          complete: false
        },
        {
          task: 'Do the laundry',
          complete: false
        },
        {
          task: 'Walk the dog',
          complete: true
        },
        {
          task: 'Kill all',
          complete: false
        },
      ],
    };
  }

  render() {
    const todos = this.state.todos.map((todo, index) => (
      <Todo
        key={index}
        complete={todo.complete}
        task={todo.task}
      />
    ));
    return (
      <div>
        <ul className="todo-list">
          { todos }
        </ul>
      </div>
    );
  }
}

export default TodoList;
