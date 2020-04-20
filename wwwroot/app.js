let connection;

const params = new URLSearchParams(window.location.search);
let room = params.get('room') || '🌏';

document.addEventListener('DOMContentLoaded', function () {
    connection = new signalR.HubConnectionBuilder()
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
            join();
        })
        .catch(error => {
            console.error(error.message);
        });
});

function send(action) {
    connection.invoke('send', room, action);
}

function join() {
    connection.invoke('join', room);
}

HTMLElement.prototype.bounce = function () {
    const classes = this.classList;
    classes.add('bounce');
    clearTimeout(this.bouncer);
    this.bouncer = setTimeout(function () { classes.remove('bounce'); }, 500);
}