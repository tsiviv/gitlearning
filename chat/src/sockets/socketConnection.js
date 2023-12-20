import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Invitations from './invetation'
import Addroom from "./addroom";
import UserRooms from "./userRooms";
import Restart from '../restart';
import SendMessage from "./sendMessage";
import Join from "./join";
const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const userId = params.get('userId');

const socket = io('http://18.116.57.209', {
  query: {
    userId: userId,
    username: name
  },
});

const Chat = () => {
  const [users, setusers] = useState()
  const [rooms, setrooms] = useState()
  const [RoomsUser, setRoomsUser] = useState()
  const [selectRoomUser, setselectRoomUser] = useState()
  const [selectUser, setselectUser] = useState()
  const [selectRoom, setselectRoom] = useState()
  const [selectRoomtext, setselectRoomtext] = useState()

  useEffect(() => {
    // Your socket.io code here
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    // Cleanup on unmount
    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  return (<>
    <Restart setrooms={setrooms} setusers={setusers} rooms={rooms} users={users} setselectRoom={setselectRoom} setselectUser={setselectUser} setselectRoomtext={setselectRoomtext}>  </Restart>
    <Invitations socket={socket} selectUser={selectUser}></Invitations>
    <Addroom socket={socket}></Addroom>
    <UserRooms socket={socket} setRoomsUser={setRoomsUser} RoomsUser={RoomsUser}></UserRooms>
    <SendMessage selectRoomUser={selectRoomUser} socket={socket}></SendMessage>
    <Join socket={socket} selectRoom={selectRoom} selectRoomtext={selectRoomtext}></Join>
  </>);
};

export default Chat;
