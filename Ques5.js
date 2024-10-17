// 5. TCP Server and TCP Client

//TCP server

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected');
    socket.on('data', (data) => {
        console.log('Received:', data.toString());
    });
    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(8080, () => {
    console.log('Server listening on port 8080');
});


//TCP Client

const net = require('net');

const client = net.createConnection({ port: 8080 }, () => {
    console.log('Connected to server');
    client.write('Hello Server!');
});

client.on('data', (data) => {
    console.log('Server says:', data.toString());
    client.end();
});
