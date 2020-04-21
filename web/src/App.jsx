import React from 'react';
import ConnectionContext from './ConnectionContext';
import ConnectionStatus from './ConnectionStatus';
import SoundBoard from './SoundBoard';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'disconnected',
    };

    props.connection.onConnecting(() => this.setState({ status: 'connecting' }));
    props.connection.onConnected(() => this.setState({ status: 'connected' }));
    props.connection.onDisconnect(() => this.setState({ status: 'disconnected' }));
  }

  render() {
    const { connection, roomState } = this.props;
    const { status } = this.state;
    return <ConnectionContext.Provider value={connection}>
      {
        status === 'connected'
          ? <SoundBoard />
          : <ConnectionStatus roomState={roomState} status={status} />
      }      
    </ConnectionContext.Provider>;
  }
}

export default App;
