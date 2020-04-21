import { HubConnectionBuilder } from '@microsoft/signalr';

class Connection {
  constructor(props) {
    this.props = props;
    this.playHandlers = {};
    this.connectingHandler = () => {};
    this.connectedHandler = () => {};
    this.disconnectedHandler = () => {};

    // this.connect();
  }

  send(fx) {
    this.connection.invoke('send', this.props.room, fx);
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

  connect() {
    this.connectingHandler();
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
        this.connection.invoke('join', this.props.room)
      }).catch(error => {
        console.error('Failed to connect', error.message);
        this.disconnectedHandler();
      });
  }
}

export default Connection;