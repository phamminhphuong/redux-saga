import * as types from './../constants/index';

var initState = []

const todos = (state = initState, action) => {
  switch(action.type) {
    case types.LIST_TODO:
      state = action.todos;
      return [...state];
    case types.ADD_TODO:
      state.push(action.todo);
      return [...state];
    default:
      return state;
  }
}

export default todos;
