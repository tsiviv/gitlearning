import React, { useEffect, useState } from 'react';
import Rooms from './components/rooms';
import Users from './components/users';
import Join from './sockets/join';
import Invitations from './sockets/invetation';
const fetchData = async (setusers, setrooms) => {
  try {
    const userResponse = await fetch('http://18.116.57.209/user');
    const roomResponse = await fetch('http://18.116.57.209/rooms');
    console.log(userResponse)
    console.log(roomResponse)

    const userData = await userResponse.json();
    const roomData = await roomResponse.json();
    setusers(userData);
    setrooms(roomData);
    console.log('Data fetched successfully:', userData, roomData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const Restart = ({socket,selectRoom,selectUser, selectRoomtext,setselectRoomUser, setselectRoomtext, setrooms, setusers, rooms, users, setselectRoom, setselectUser }) => {
  useEffect(() => {
    fetchData(setusers, setrooms);
  }, []);

  return (
    <>
      {users && rooms ? (
        <>
          <Users users={users} setselectUser={setselectUser} />
          <br></br>
          <Invitations  socket={socket} selectUser={selectUser}></Invitations>
          <br></br>

          
          <Rooms who="choose a room to connect" setselectRoomUser={setselectRoomUser} rooms={rooms} setselectRoom={setselectRoom} setselectRoomtext={setselectRoomtext} />
          <br></br>
          <Join  socket={socket} selectRoom={selectRoom} selectRoomtext={selectRoomtext}></Join>
        </>
      ) : (
        // Render a loading state or handle the loading scenario as needed
        <p>Loading...</p>
      )}
    </>
  );
};

export default Restart;
