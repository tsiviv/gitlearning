import React, { useEffect, useState } from 'react';
import Rooms from './components/rooms';
import Users from './components/users';

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

const Restart = ({ setselectRoomtext, setrooms, setusers, rooms, users, setselectRoom, setselectUser }) => {
  useEffect(() => {
    fetchData(setusers, setrooms);
  }, [setusers, setrooms]);

  return (
    <>
      {users && rooms ? (
        <>
          <Users users={users} setselectUser={setselectUser} />
          <Rooms rooms={rooms} setselectRoom={setselectRoom} setselectRoomtext={setselectRoomtext} />
        </>
      ) : (
        // Render a loading state or handle the loading scenario as needed
        <p>Loading...</p>
      )}
    </>
  );
};

export default Restart;
