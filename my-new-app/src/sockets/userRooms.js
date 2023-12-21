import React, { useEffect, useState } from 'react';
import Rooms from '../components/rooms';
const UserRooms = ({ setrooms,socket,setRoomsUser, RoomsUser, setselectRoom,setselectRoomtext,setselectRoomUser }) => {
    useEffect(() => { if (RoomsUser && RoomsUser.length > 0) { setselectRoomUser(RoomsUser[0].roomname);  } })

    useEffect(() => {
        // Initial load of rooms
        restartRoomsUser();

        // Set up socket event listener for 'userRooms'
        socket.on('userRooms', (updatedRooms) => {
            console.log("updatedRooms")
            setRoomsUser(updatedRooms)
        });
        // Cleanup socket event listener when component unmounts
        //     return () => {
        //       socket.off('userRooms');
        //     };
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    const restartRoomsUser = () => {
        // Assuming you have a socket instance
        socket.emit('userRooms');
    };



    return (
        <div>
            <Rooms who="choose a room from your connected rooms" rooms={RoomsUser} setrooms={setrooms} setselectRoom={setselectRoom} setselectRoomtext={setselectRoomtext}></Rooms>
        </div>
    );
};

export default UserRooms;
