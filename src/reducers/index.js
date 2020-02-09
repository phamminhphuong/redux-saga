import { combineReducers } from 'redux';
import todos from './todos';

const toDoApp = combineReducers({
  todos
})

export default toDoApp;
