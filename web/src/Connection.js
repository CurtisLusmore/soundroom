import { HubConnectionBuilder } from '@microsoft/signalr';

class Connection {
  constructor() {
    this.playHandlers = {};
    this.connectingHandler = () => {};
    this.connectedHandler = () => {};
    this.disconnectedHandler = () => {};
  }

  send(fx) {
    this.connection.invoke('send', this.room, fx);
  }

  onPlay(action, callback) {
    this.playHandlers[action] = callback;
  }

  onConnected(callback) {
    this.connectedHandler = callback;
  }

  onConnecting(callback) {
    this.connectingHandler = callback;
  }

  onDisconnect(callback) {
    this.disconnectedHandler = callback;
  }

  connect(room) {
    this.connectingHandler();

    this.room = room || '%DEFAULT%';
    this.connection = new HubConnectionBuilder()
      .withUrl('/sound')
      .build();

    this.connection.on('join', () => console.log('Somebody joined'));
    this.connection.on('play', fx => {
      console.log('Playing', fx);
      this.playHandlers[fx]();
    });
    this.connection.onclose(this.disconnectedHandler);

    this.connection
      .start()
      .then(() => {
        this.connectedHandler();
        this.connection.invoke('join', this.room)
      }).catch(error => {
        console.error('Failed to connect', error.message);
        this.disconnectedHandler();
      });
  }
}

export default Connection;