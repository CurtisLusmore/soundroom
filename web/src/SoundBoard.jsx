import React from 'react';
import Button from './Button';
import './SoundBoard.css';

export default function () {
  return <div class="grid">
    <Button icon="👏" src="/audio/clap.mp3" alt="Clap" />
    <Button icon="🥳" src="/audio/party.mp3" alt="Party" />
    <Button icon="🤣" src="/audio/laugh.mp3" alt="Laugh" />
    <Button icon="🥁" src="/audio/drum.mp3" alt="Badum-tish" />
    <Button icon="🏆" src="/audio/success.mp3" alt="Success" />
    <Button icon="🤯" src="/audio/wow.mp3" alt="Wow" />
    <Button icon="😮" src="/audio/ooh.mp3" alt="Ooh" />
    <Button icon="🤑" src="/audio/kaching.mp3" alt="Kaching"/>
    <Button icon="🥺" src="/audio/aww.mp3" alt="Aww" />
    <Button icon="🤔" src="/audio/hmm.mp3" alt="Hmm" />
    <Button icon="🤨" src="/audio/huh.mp3" alt="Huh" />
    <Button icon="🥱" src="/audio/yawn.mp3" alt="Yawn" />
    <Button icon="😈" src="/audio/evil.mp3" alt="Evil" />
    <Button icon="🤦" src="/audio/facepalm.mp3" alt="Facepalm" />
    <Button icon="🤬" src="/audio/boo.mp3" alt="Boo" />
    <Button icon="😱" src="/audio/scream.mp3" alt="Scream" />
    <Button icon="🦗" src="/audio/cricket.mp3" alt="Crickets" />
    <Button icon="🦖" src="/audio/dinosaur.mp3" alt="Dinosaur" />
    <Button icon="🧏" src="/audio/louder.mp3" alt="Louder" />
    <Button icon="🤫" src="/audio/ssh.mp3" alt="Ssh" />
    <Button icon="👍" src="/audio/yes.mp3" alt="Yes" />
    <Button icon="👎" src="/audio/no.mp3" alt="No" />
    <Button icon="🙆" src="/audio/right.mp3" alt="Right" />
    <Button icon="🙅" src="/audio/wrong.mp3" alt="Wrong" />
  </div>;
}