import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Connection from './Connection';

const params = new URLSearchParams(window.location.search);
const room = params.get('room') || '🌏';
const connection = new Connection({ room });

ReactDOM.render(
  <React.StrictMode>
    <App connection={connection} />
  </React.StrictMode>,
  document.getElementById('root')
);
