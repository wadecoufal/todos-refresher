import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore({});
  console.log("Store", store);
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});