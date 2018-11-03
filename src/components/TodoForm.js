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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(val) {
    this.setState({
      input: val
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {input} = this.state;
    this.props.handleSubmit(input);
    this.setState({
      input: ''
    });
  }

  render() {
    return (
      <div>
        <form 
          className="todo-form"
          onSubmit={this.handleSubmit}
        >
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
