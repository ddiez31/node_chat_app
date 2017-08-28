let socket = io();
socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Bob',
    text: 'Hey this is nice!'
  })
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on(`newMnewMessage`, message);
});
