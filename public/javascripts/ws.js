(function(io, undefined) {
  var socket = io.connect('http://localhost:3000');
  socket.on('new', function(data) {
    socket.emit('completion', { datapiece : 'piece'});
  });

  socket.on('code', function(data) {
    code = document.getElementById('code');
    code.innerHTML = data.hello;
  });
})(io);
