// app.js
const express = require('express');
const app = express();

const socketIO = require('socket.io');
const cors = require('cors');
app.use(cors());
const http = require('http');

const server = http.createServer(app);
const Server = socketIO(server);

// Use cors middleware for express routes
app.use(cors());

// Set up Socket.IO server with CORS options
const io = new socketIO.Server(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});
app.use(express.static('public'));
const c = require("./node/tables/roomsTable")
const c1 = require("./node/tables/usersTable")
const c2 = require("./node/tables/usersRoomsTable")
const userIds = []
const userRouter = require("./node/routers/userRouter")
const roomsRouter = require("./node/routers/roomsRouter")
const usersRoomsquery = require("./node/queries/userRoomsQuery")
const roomsQuery = require("./node/queries/roomsQuery")
const usersQuery = require("./node/queries/usersQuery")
app.use("/user", userRouter)
app.use("/rooms", roomsRouter)
io.on('connection', async (socket) => {
  const userId = socket.handshake.query.userId;
  const username = socket.handshake.query.username;
  const user = await usersQuery.postUser(userId, username, socket.id)
  socket.on('join', async (group, nameRoom) => {
    console.log("join")
    const responseMessage = `new user to ${nameRoom}`;
    socket.join(nameRoom);
    await usersRoomsquery.postuserRoom(userId, group)
    io.to(nameRoom).emit('message', responseMessage)
  })
  socket.on('addroom', async (nameRoom) => {
    console.log("add");
    const room = await roomsQuery.postRoom(nameRoom);
  
    if ( room.message === `room ${nameRoom} exist already`) {
      io.to(socket.id).emit('roomExists', { message: `Room ${nameRoom} already exists` });
    } else {
      io.to(socket.id).emit('added', { message: `${nameRoom} group added` });
    }
  });
  
  socket.on('room', async (group, nameRoom) => {
    const responseMessage = `new user to ${nameRoom}`;
    socket.join(nameRoom);
    await usersRoomsquery.postuserRoom(userId, group)
    socket._currentRoom = group;
    io.to(nameRoom).emit('message', responseMessage)
  })

  socket.on('userRooms', async () => {
    const rooms = await usersRoomsquery.getUserRooms(userId)
    console.log(rooms)
    io.to(socket.id).emit('userRooms', rooms);
  });

  socket.on('message', (message, group) => {
    const responseMessage = ` ${username} says:   ${message}`;
    console.log(group)
    io.to(group).emit('message', responseMessage);
  });

  socket.on('talk', async (friend) => {
    socket.join(`${username} and ${friend}`);
    console.log(userId)
    const room = await roomsQuery.postRoom(friend)
    console.log(room)
    await usersRoomsquery.postuserRoom(userId, room.id)
    const responseMessage = ` ${username} wants to talk with you`;
    const user = await usersQuery.getUser(friend)
    io.to(user.socketid).emit('inventation', responseMessage, `${username} and ${friend}`);
  });

  socket.on('joinFriend', async (group) => {
    const responseMessage = `hi ${group}`; 0
    socket.join(group);
    socket._currentRoom = group;
    io.to(group).emit('message', responseMessage)
  })

  socket.on('disconnect', (socket) => {
    delete userIds[socket.id]
  });

}



);



const PORT = 80;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// W!zsoft