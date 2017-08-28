const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log("New user connected");

  socket.emit('newMessage', {
    form: 'Admin',
    text: 'Welcome to the chat app'
  });

  socket.broadcast.emit('newMessage', {
    from: 'Admin',
    text: 'New user joined the chat'
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: newMessage.from,
      text: newMessage.text,
      createdAt: new Date().getTime()
    });
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log("User disconnected");
  });
});


server.listen(port, () => {
  console.log(`Chat app running on port ${port}`);
});
