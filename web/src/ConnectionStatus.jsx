import React from 'react';
import ConnectionContext from './ConnectionContext';
import './ConnectionStatus.css';

export default function (props) {
  return <ConnectionContext.Consumer>{function (connection) {
    return <div class="status">{
      props.status === 'connecting'
        ? <p>🤝 Connecting...</p>
        : <p class="button" onClick={() => connection.connect()}>👋 Connect</p>
    }</div>
  }}</ConnectionContext.Consumer>
};