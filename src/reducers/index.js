import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';

const rootReducer = combineReducers({
  todos,
  showAll: filter
});

export default rootReducer;