

var net = require('net');
var colors = require('colors');
var server = net.createServer();

var sockets = [];



server.on('connection', function(socket) {

    socket.name = socket.remoteAddress + ':' + socket.remotePort;

  Array.prototype.random = function (length) {
               return this[Math.floor((Math.random()*length))];
         }
        var color = ['yellow', 'cyan', 'magenta', 'red', 'green', 'blue', 'rainbow', 'zebra']
        var rcolor = color.random(color.length)

    socket.write(' whatup '.inverse + socket.name.yellow + ' ?\n');
    socket.write(("whatup yo" + socket.name)[rcolor]);




     
        

        console.log("Got a new connection" );

        sockets.push(socket);




             socket.on('data', function(data) {
            console.log('Received'.green + data);
    

        sockets.forEach(function(otherSocket) {
            otherSocket.write(socket.name + '>> ' + data );

        });
    });

    socket.on('close', function() {
        console.log('Connection closed');
        var index = sockets.indexOf(socket);
        sockets.splice(index, 1);
    });

});

server.on('error', function(err) {
    console.log('Server error: ', err.message);
});

server.on('close', function() {
    console.log('Server closed');
});

console.log('Server listening');
server.listen(4000);
