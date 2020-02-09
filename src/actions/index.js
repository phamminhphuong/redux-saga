import axios from 'axios';
import * as types from './../constants/index';

export const actListTodo = (todos) => {
  return (dispatch) => {
    axios.get('http://5ca57dc9ddab6d0014bc8569.mockapi.io/api/todos')
    .then(function (response) {
      dispatch(listTodo(response.data))
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}

export const listTodo = (todos) => {
  return {
    type: types.LIST_TODO,
    todos
  }
}


export const actAddTodo = (todo) => {
  return (dispatch) => {
    axios.post('http://5ca57dc9ddab6d0014bc8569.mockapi.io/api/todos', {name: todo})
    .then(function (response) {
      // console.log(response)
      dispatch(addTodo(response.data))
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}

export const addTodo = (todo) => {
  return {
    type: types.ADD_TODO,
    todo
  }
}
