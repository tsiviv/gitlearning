import React, { useEffect, useState } from 'react';
import Rooms from '../components/rooms';
const UserRooms = ({ socket, setRoomsUser, RoomsUser }) => {

    useEffect(() => {
        // Initial load of rooms
        restartRoomsUser();

        // Set up socket event listener for 'userRooms'
        socket.on('userRooms', (updatedRooms) => {
            console.log(updatedRooms)
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
            <Rooms rooms={RoomsUser}></Rooms>
        </div>
    );
};

export default UserRooms;
