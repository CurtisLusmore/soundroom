import React from 'react';
import ConnectionContext from './ConnectionContext';

const bounce = function (elem) {
  elem.classList.add('bounce');
  clearTimeout(elem.bouncer);
  elem.bouncer = setTimeout(function () { elem.classList.remove('bounce'); }, 500);
};

const Button = function ({ icon, src, alt }) {
  return <ConnectionContext.Consumer>{function (connection) {
    const button = React.createRef();
    const audio = React.createRef();
    connection.onPlay(icon, function () {
      bounce(button.current);
      audio.current.play();
    });
    return <>
      <span ref={button} class="button" id={`${icon}-button`}
        title={alt} aria-title={alt}
        onClick={() => connection.send(icon)}>{icon}</span>
      <audio ref={audio} id={`${icon}-player`} src={src}></audio>
    </>;
  }}</ConnectionContext.Consumer>
};

export default Button;
