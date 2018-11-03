import React, { Component } from 'react';
import './Todo.css';
import Button from './Button';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      edit: false,
    };

    this.setEdit = this.setEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setEdit(task) {
    this.setState({
      value: task,
      edit: true
    });
  }

  handleChange(val) {
    this.setState({
      value: val,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      edit: false,
    });
    this.props.updateTodo(this.props.id, this.state.value);
  }


  render() {
    const { task, complete, toggleTodo, deleteTodo } = this.props;
    const { value, edit } = this.state;
    return (
      <li className={`todo ${complete ? 'complete' : ''}`}>
        
        { edit ? (
          <div className="todo-content">
            <form 
              className="todo-edit-form"
              onSubmit={this.handleSubmit}
            >
              <input 
                type="text"
                value={this.state.value}
                onChange={(e) => this.handleChange(e.target.value)}
              />
              <Button color='rgb(221, 174, 19)'>done</Button>
            </form>
          </div>
        ) : (
          <div className="todo-content">
            <div 
              className="todo-status"
              onClick={toggleTodo}
            >
            </div>
            { task }
          </div>
        )}
        <div className="todo-actions">
          { edit || complete ? (
            null
          ) : (
            <Button 
              color='rgb(221, 174, 19)'
              onClick={() => this.setEdit(task)}
            >
              edit
            </Button>
          )}
          <Button 
            color='rgb(221, 19, 53)'
            onClick={deleteTodo}
          >
            del
          </Button>
        </div>
      </li>
    );
  }
}

export default Todo;