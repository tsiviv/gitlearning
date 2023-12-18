// app.js
const { group } = require('console');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const cors = require('cors');
app.use(cors());

app.use(express.static('public'));
const users = [];
const family = [];
const friends = [];


io.on('connection', (socket) => {

  const userId = socket.handshake.query.userId;

  const username = socket.handshake.query.username;
  socket.on('join', (group) => {
    const responseMessage = `new user to ${group}`;
    console.log(responseMessage)
    socket.join(group);
    io.to(group).emit('message', responseMessage)
  });
  if (usersValid(userId)) {
    users.push(socket.id);
    console.log(`Socket connection opened for user ID: ${userId}`);

    socket.on('message', (message) => {
      const responseMessage = `Server received from user ${userId}: ${message}`;
      io.to(users).emit('message', responseMessage);
    });

    socket.on('disconnect', () => {
      console.log(`Socket connection closed for user ID: ${userId}`);
    });

  }
  // else if (familyValid(username)) {
  //   friends.push(userId)
  //   family.push(socket.id);

  //   socket.on('message', (message) => {
  //     const responseMessage = `Server received from user ${username}: ${message}`;
  //     io.to(family).emit('message', responseMessage);
  //   });

  //   socket.on('disconnect', () => {
  //     console.log(`Socket connection closed for user ${username}`);
  //   });

  // } 
  else {
    console.log(`Unauthorized connection attempt with user ID: ${userId}`);
    socket.disconnect(true);
  }

});

function usersValid(userId) {
  // Add your logic to validate user IDs (e.g., allow only specific IDs)
  return userId === '1' || userId === '2';
}

function familyValid(username) {
  // Add your logic to validate family usernames
  return username === 'kaner';
}

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
