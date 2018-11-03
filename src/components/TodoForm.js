import React, { Component } from 'react';
import './TodoForm.css';
import Button from './Button';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    this.setState({
      input: val
    });
  }

  render() {
    return (
      <div>
        <form className="todo-form" action="">
          <input 
            type="text"
            value={this.state.input}
            onChange={(e) => this.handleChange(e.target.value)}
          />
          <Button color='#31da77'>Add Todo</Button>
        </form>
      </div>
    );
  }

}

export default TodoForm;
