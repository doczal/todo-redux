import React, { Component } from 'react';
import './TodoList.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 4,
      todos: [
        {
          task: 'Read a book',
          complete: false,
          id: 0,
        },
        {
          task: 'Do the laundry',
          complete: false,
          id: 1,
        },
        {
          task: 'Walk the dog',
          complete: true,
          id: 2,
        },
        {
          task: 'Kill all',
          complete: false,
          id: 3,
        },
      ],
    };

    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  addTodo(task) {
    const todo = {
      id: this.state.id,
      task,
      complete: false
    };
    this.setState({
      id: this.state.id + 1,
      todos: [...this.state.todos, todo]
    });
  }

  toggleTodo(id) {
    const todos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo;
    });

    this.setState({
      todos
    });
  }

  render() {
    const todos = this.state.todos.map((todo, index) => (
      <Todo
        key={index}
        complete={todo.complete}
        task={todo.task}
        toggleTodo={() => this.toggleTodo(todo.id)}
      />
    ));
    return (
      <div className="todo-list-container">
        <TodoForm 
          handleSubmit={this.addTodo}
        />
        <ul className="todo-list">
          { todos }
        </ul>
      </div>
    );
  }
}

export default TodoList;
