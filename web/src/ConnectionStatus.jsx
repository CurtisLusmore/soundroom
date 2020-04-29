import React from 'react';
import ConnectionContext from './ConnectionContext';
import './ConnectionStatus.css';

export default class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);

    const audio = React.createRef();
    this.state = {
      room: props.roomState.get(),
      audio,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    const room = ev.target.value;
    this.setState({ room });
  }

  submit(ev, connection) {
    ev.preventDefault();
    const { roomState } = this.props;
    const { room, audio } = this.state;

    roomState.set(room);
    connection.connect(room);
    audio.current.play();
    return false;
  }

  render() {
    const { status } = this.props;
    const { room, audio } = this.state;
    return <ConnectionContext.Consumer>{connection => {
      return <div class="status">
        <audio ref={audio} src="/audio/click.mp3" />
        {
        status === 'connecting'
          ? <p>🤝 Connecting...</p>
          : <form onSubmit={ev => this.submit(ev, connection)}>
              <input type="text" placeholder="Room" value={room} onChange={this.onChange} autoFocus />
              <input type="submit" value="👋 Connect" />
          </form>
        }
      </div>
    }}</ConnectionContext.Consumer>;
  }
};