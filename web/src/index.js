import React from 'react';
import ReactDOM from 'react-dom';
import { HubConnectionBuilder } from '@microsoft/signalr';
import './index.css';
import App from './App';


let connection;

const params = new URLSearchParams(window.location.search);
let room = params.get('room') || '🌏';

document.addEventListener('DOMContentLoaded', function () {
    connection = new HubConnectionBuilder()
        .withUrl('/sound')
        .build();
        connection.on('play', function (action) {
            console.log(action);
            document.getElementById(`${action}-player`).play();
            document.getElementById(`${action}-button`).bounce();
        });
        connection.on('join', function () {
            console.log('Somebody joined');
        });

    connection
        .start()
        .then(function () {
            console.log('connection started');
            connection.invoke('join', room);
        })
        .catch(error => {
            console.error(error.message);
        });
});

function send(action) {
    connection.invoke('send', room, action);
}

HTMLElement.prototype.bounce = function () {
    const classes = this.classList;
    classes.add('bounce');
    clearTimeout(this.bouncer);
    this.bouncer = setTimeout(function () { classes.remove('bounce'); }, 500);
}

ReactDOM.render(
  <React.StrictMode>
    <App send={send} />
  </React.StrictMode>,
  document.getElementById('root')
);
