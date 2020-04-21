import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Connection from './Connection';

const connection = new Connection();

const roomState = {
  get() { return window.location.hash.substr(1) || ''; },
  set(value) { window.location.hash = value; }
};

ReactDOM.render(
  <React.StrictMode>
    <App roomState={roomState} connection={connection} />
  </React.StrictMode>,
  document.getElementById('root')
);
