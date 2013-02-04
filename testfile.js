var net = require('net');
var colors = require('colors');
var server = net.createServer();

var sockets = [];
var color = ['zebra', 'rainbow', 'blue', 'red', 'green', 'magenta', 'yellow', 'cyan']


server.on('connection', function(socket) {

    socket.name = socket.remoteAddress + ':' + socket.remotePort;

    Object.prototype.newMethod = "cc";
    //for loop
    for (var i=0; i < color.length+7; i++) {
   
}
    var rcolor = color.pop();
    socket.write("WHAT UP:".inverse);
    socket.write((socket.name + ' ')[rcolor]);


        console.log("WE GOT ANOTHER ONE:".inverse );
        console.log((socket.name)[rcolor]);

        sockets.push(socket);

    


            socket.on('data', function(data) {  
            var ts = Date.now() / 1000;     
            console.log(ts + ' RECEIVED:'.bold);
            console.log((socket.name + ": " + data)[rcolor]);
    

                sockets.forEach(function(otherSocket) {
                otherSocket.write((socket.name + ': ')[rcolor]);
                otherSocket.write(data);


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
