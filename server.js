// app.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const cors = require('cors');
app.use(cors());
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
  console.log("khj")
  // const hisRooms=await usersRoomsquery.getUserRooms(userId)
  // console.log(hisRooms)
  // io.to(socket.id).emit('updateRooms', hisRooms);

  socket.on('join', async (group, nameRoom) => {
    const responseMessage = `new user to ${nameRoom}`;
    socket.join(nameRoom);
    await usersRoomsquery.postuserRoom(userId, group)
    socket._currentRoom = group;
    io.to(nameRoom).emit('message', responseMessage)
  })
  socket.on('addroom', async (nameRoom) => {
    const room = await roomsQuery.postRoom(nameRoom)
    if (room ==`room ${nameRoom} exist already`)
      io.to(socket.id).emit(`room ${nameRoom} exist already`)
    else
      io.to(socket.id).emit('added', `${nameRoom} group added`)
  })
  socket.on('room', async (group, nameRoom) => {
    const responseMessage = `new user to ${nameRoom}`;
    socket.join(nameRoom);
    await usersRoomsquery.postuserRoom(userId, group)
    socket._currentRoom = group;
    io.to(nameRoom).emit('message', responseMessage)
  })

  socket.on('message', (message, group) => {
    const responseMessage = ` ${username} says:   ${message}`;
    io.to(group).emit('message', responseMessage);
  });

  socket.on('talk', async (friend) => {
    socket.join(`${username} and ${friend}`);
    console.log(userId)
    await usersRoomsquery.postuserRoom(userId, `${username} and ${friend}`)
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