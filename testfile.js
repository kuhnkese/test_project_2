

var net = require('net');
var colors = require('colors');
var prompt = require('prompt');
var server = net.createServer();

var sockets = []
var color = ['yellow', 'cyan', 'magenta', 'red', 'green', 'blue', 'rainbow', 'zebra']



server.on('connection', function(socket) {

    socket.name = socket.remoteAddress + ':' + socket.remotePort
    socket.write(' whatup '.inverse + socket.name.yellow + ' ?\n');
    // so right up here, where it says 'socket.name.yellow' it prints the socket.name in yellow based on the colors
    // module. How the module works is anytime you put '.yellow' .'cyan' ect right after a variable, it will print
    // that variable in that color.


        console.log('Got a new connection');
        sockets.push(socket);
// so what im trying to do, i think maybe it should happen around here, is 
//each time the socket is pushed to another number in the array, it will also grab the next color with the
// 'shift' array method 


             socket.on('data', function(data) {
            console.log('Received'.green + data);
    

        sockets.forEach(function(otherSocket) {
            otherSocket.write(socket.name.yellow + '>> ' + data );

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
