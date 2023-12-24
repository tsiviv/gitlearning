import React, { useState, useEffect, useRef } from 'react';
import Addroomc from '../components/addRoom';

const Addroom = ({ socket }) => {
  const [newRoom, setNewRoom] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  // Use a ref to keep track of the socket
  const socketRef = useRef(socket);

  useEffect(() => {

    socket.on('added', (data) => {
      console.log("added");
      alert(data.message);
      setAlertMessage(data.message);
      setNewRoom("")
    });

    socket.on('roomExists', (data) => {
      console.log("roomExists");
      alert(data.message);
      setAlertMessage(data.message);
      setNewRoom("")
    });


  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleAddRoom = () => {
    // Assuming you have a socket instance
    if (newRoom)
      socket.emit('addroom', newRoom);
  };

  return (
    <div>
      <Addroomc newRoom={newRoom} setNewRoom={setNewRoom} handleAddRoom={handleAddRoom}></Addroomc>
      {/* {alertMessage && <p>{alertMessage}</p>} */}
    </div>
  );
};

export default Addroom;
