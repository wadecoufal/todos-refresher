import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore({});
  console.log("Store", store);
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.store = store;
  ReactDOM.render(<h1>HELLO!</h1>, root);
});