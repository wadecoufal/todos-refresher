import React from 'react';
import App from './app';
import { Provider } from 'react-redux';

const Root = ({store}) => (
  <Provider store={store}>
    <h1>In the Provider Root</h1>
    <App />
  </Provider>
);

export default Root;