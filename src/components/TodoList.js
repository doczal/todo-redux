import React, { Component } from 'react';
import './TodoList.css';
import Todo from './Todo';
import TodoForm from './TodoForm';
import Button from './Button';
import * as apiCalls from '../api.js';
import { connect } from 'react-redux';
import { getTodos, addTodo, editTodo, toggleTodo, deleteTodo, toggleFilter } from '../actions';
 
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAll: true,
      todos: []
      // todos: [
      //   {
      //     task: 'Read a book',
      //     complete: false,
      //     id: 0,
      //   },
      //   {
      //     task: 'Do the laundry',
      //     complete: false,
      //     id: 1,
      //   },
      //   {
      //     task: 'Walk the dog',
      //     complete: true,
      //     id: 2,
      //   },
      //   {
      //     task: 'Kill all',
      //     complete: false,
      //     id: 3,
      //   },
      // ],
    };

    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  componentDidMount() {

    
    apiCalls.getTodos()
      .then((todos) => {
        this.props.getTodos(todos);
      });
  }

  addTodo(task) {
    // const todo = {
    //   _id: 50,
    //   task,
    //   complete: false
    // }
    // this.props.addTodo(todo);
    apiCalls.addTodo(task)
      .then((todo) => {
        this.props.addTodo(todo);
      });
  }

  toggleTodo(todo) {
    apiCalls.toggleTodo(todo)
      .then((updatedTodo) => {
        this.props.toggleTodo(updatedTodo);
      });
    
    // apiCalls.toggleTodo(todo)
    //   .then((updatedTodo) => {
    //     const todos = this.state.todos.map((todo) => {
    //       if(todo._id === updatedTodo._id) {
    //         return {
    //           ...todo,
    //           complete: updatedTodo.complete,
    //         }
    //       }
    //       return todo;
    //     });
    //     this.setState({
    //       todos
    //     });
    //   });
  }
  
  //Explore how to handle 'non-ID' IDs like 'abcd'
  deleteTodo(id) {
    apiCalls.deleteTodo(id)
      .then(() => {
        this.props.deleteTodo(id);
      });
    // apiCalls.deleteTodo(id)
    //   .then(() => {
    //     const todos = this.state.todos.filter((todo) => {
    //       return todo._id !== id;
    //     });
    
    //     this.setState({
    //       todos
    //     });
    //   });
  }

  updateTodo(id, val) {
    apiCalls.updateTodo(id, val)
      .then(() => {
        this.props.editTodo(id, val);
      });
    
    // apiCalls.updateTodo(id, val)
    //   .then(() => {
    //     const todos = this.state.todos.map((todo) => {
    //       if(todo._id === id) {
    //         return {
    //           ...todo,
    //           task: val,
    //         }
    //       }
    //       return todo;
    //     });
    
    //     this.setState({
    //       todos
    //     });
    //   });  
  }

  toggleFilter() {
    this.props.toggleFilter();
  }

  render() {

    const { showAll } = this.props;
    const todos = this.props.todos.filter((todo) => {
      if(showAll) {
        return todo;
      } else {
        return todo.complete !== true;
      }
    }).map((todo) => (
      <Todo
        key={todo._id}
        id={todo._id}
        complete={todo.complete}
        task={todo.task}
        toggleTodo={() => this.toggleTodo(todo)}
        deleteTodo={() => this.deleteTodo(todo._id)}
        updateTodo={this.updateTodo}
      />
    ));

    return (
      <div className="todo-list-container">
        <header>
          <h1 className="todo-list-title">ToDo List</h1>
          <div className="todo-filters">
            <span>Filter</span>
            <Button 
              color='#499bf8'
              onClick={this.toggleFilter}
            >
              {showAll ? 'Show Complete' : 'Show All'}
            </Button>
          </div>
        </header>
        
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

function mapStateToProps(state) {
  return {
    showAll: state.showAll,
    todos: state.todos
  };
}

const mapDispatchToProps = {
  getTodos,
  addTodo,
  editTodo,
  toggleTodo,
  deleteTodo,
  toggleFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
