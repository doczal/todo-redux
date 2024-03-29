export const ADD_TODO = 'ADD_TODO',
      GET_TODOS = 'GET_TODOS',
      TOGGLE_TODO = 'TOGGLE_TODO',
      EDIT_TODO = 'EDIT_TODO',
      DELETE_TODO = 'DELETE_TODO',
      TOGGLE_FILTER = 'TOGGLE_FILTER';

export function getTodos(todos) {
  return {
    type: GET_TODOS,
    todos
  };
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

export function toggleTodo(todo) {
  return {
    type: TOGGLE_TODO,
    todo
  };
}

export function editTodo(id, text) {
  return {
    type: EDIT_TODO,
    id,
    text
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  };
}

export function toggleFilter() {
  return {
    type: TOGGLE_FILTER
  };
}