var net = require('net');
var colors = require('colors');
var server = net.createServer();

var sockets = [];
var color = ['yellow', 'cyan', 'magenta', 'red', 'green', 'blue', 'rainbow', 'zebra']


server.on('connection', function(socket) {

    socket.name = socket.remoteAddress + ':' + socket.remotePort;

    Object.prototype.newMethod = "cc";
    //for loop
    for (var i=0; i < color.length+7; i++) {
   
}
    var rcolor = color.pop();
// so this right here is doing it, each time somone logs in it prompts the user in a different color, but it 
//does not retain this color as they continue chatting
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
