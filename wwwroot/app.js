let connection;

document.addEventListener('DOMContentLoaded', function () {
    connection = new signalR.HubConnectionBuilder()
        .withUrl('/sound')
        .build();
        connection.on('play', function (action) {
            console.log(action);
            document.getElementById(action).play();
        });

    connection
        .start()
        .then(function () {
            console.log('connection started');
        })
        .catch(error => {
            console.error(error.message);
        });
});

function send(action) {
    connection.invoke('send', action);
}