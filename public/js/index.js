let socket = io();
socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createEmail', {
    to: 'bob@bob.com',
    text: 'Hey this is nice!'
  })
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newEmail', function(email) {
  console.log(`New email`, email);
});
