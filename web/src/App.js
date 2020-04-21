import React from 'react';
import './App.css';

const ConnectionContext = React.createContext(() => {});

const Button = function ({ icon, src }) {
  return <ConnectionContext.Consumer>{send => <>
      <audio id={`${icon}-player`} src={src}></audio>
      <span class="button" id={`${icon}-button`} onClick={() => send(icon)}>{icon}</span>
    </>}</ConnectionContext.Consumer>
}

function App({ send }) {
  return (
    <ConnectionContext.Provider value={send}>
      <div id="buttons">
          <div class="grid">
            <Button icon="👏" src="/audio/clap.mp3" />
            <Button icon="🥳" src="/audio/party.mp3" />
            <Button icon="🤣" src="/audio/laugh.mp3" />
            <Button icon="🥁" src="/audio/drum.mp3" />
            <Button icon="🏆" src="/audio/success.mp3" />
            <Button icon="🤯" src="/audio/wow.mp3" />
            <Button icon="😮" src="/audio/ooh.mp3" />
            <Button icon="🤑" src="/audio/kaching.mp3" />
            <Button icon="🥺" src="/audio/aww.mp3" />
            <Button icon="🤔" src="/audio/hmm.mp3" />
            <Button icon="🤨" src="/audio/huh.mp3" />
            <Button icon="🥱" src="/audio/yawn.mp3" />
            <Button icon="😈" src="/audio/evil.mp3" />
            <Button icon="🤦" src="/audio/facepalm.mp3" />
            <Button icon="🤬" src="/audio/boo.mp3" />
            <Button icon="😱" src="/audio/scream.mp3" />
            <Button icon="🦗" src="/audio/cricket.mp3" />
            <Button icon="🦖" src="/audio/dinosaur.mp3" />
            <Button icon="🧏" src="/audio/louder.mp3" />
            <Button icon="🤫" src="/audio/ssh.mp3" />
            <Button icon="👍" src="/audio/yes.mp3" />
            <Button icon="👎" src="/audio/no.mp3" />
            <Button icon="🙆" src="/audio/right.mp3" />
            <Button icon="🙅" src="/audio/wrong.mp3" />
          </div>
      </div>
    </ConnectionContext.Provider>
  );
}

export default App;
