const initialTodos = [{
  task: 'Read a book',
  complete: false,
  _id: 0,
},
{
  task: 'Do the laundry',
  complete: false,
  _id: 1,
},
{
  task: 'Walk the dog',
  complete: true,
  _id: 2,
},
{
  task: 'Kill all',
  complete: false,
  _id: 3,
}];

function todos(state=[], action) {
  switch(action.type) {
    case 'GET_TODOS':
      return action.todos;
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    case 'TOGGLE_TODO':
      let todos = state.map((todo) => {
        if(todo._id === action.todo._id) {
          return {
            ...todo,
            complete: action.todo.complete,
          }
        }
        return todo;
      });
      return todos;
    case 'EDIT_TODO':
      todos = state.map((todo) => {
        if(todo._id === action.id) {
          return {
            ...todo,
            task: action.text,
          }
        }
        return todo;
      });
      return todos;
    case 'DELETE_TODO':
      todos = state.filter((todo) => {
        return todo._id !== action.id;
      });
      return todos;
    default:
      return state;
  }
}

export default todos;