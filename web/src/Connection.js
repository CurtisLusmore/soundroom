import { HubConnectionBuilder } from '@microsoft/signalr';

class Connection {
  constructor(props) {
    this.playHandlers = {};
    this.props = props;

    this.connection = new HubConnectionBuilder()
      .withUrl('/sound')
      .build();

    this.connection.on('join', () => console.log('Somebody joined'));
    this.connection.on('play', fx => {
      console.log('Playing', fx);
      this.playHandlers[fx]();
    });

    const that = this;
    this.connection
      .start()
      .then(function () {
        console.log('Connection started');
        that.connection.invoke('join', that.props.room);
      })
      .catch(error => {
        console.error('Failed to connect', error.message);
      });
  }

  send(fx) {
    this.connection.invoke('send', this.props.room, fx);
  }

  onPlay(action, callback) {
    this.playHandlers[action] = callback;
  }
}

export default Connection;