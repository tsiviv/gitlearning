import React, { useState } from 'react';
import Addroomc from '../components/addRoom';
const Addroom = ({ socket }) => {
    const [newRoom, setNewRoom] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

   

    const handleAddRoom = () => {
        // Assuming you have a socket instance
        socket.emit('addroom', newRoom);
    };

    // Listen for the 'added' event
    socket.on('added', (message) => {
        setAlertMessage(message);
    });

    return (
        <div>
            <Addroomc newRoom={newRoom} setNewRoom={setNewRoom} handleAddRoom={handleAddRoom}></Addroomc>

            {alertMessage && <p>{alertMessage}</p>}
        </div>
    );
};

export default Addroom;
