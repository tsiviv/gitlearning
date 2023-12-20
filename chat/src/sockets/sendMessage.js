import React, { useState } from 'react';
import SendMessages from '../components/sendMessages';
const SendMessage = ({ socket, selectRoomUser }) => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const sendMessage = () => {
        // Assuming you have a socket instance
        socket.emit('message', inputValue, selectRoomUser);
    };

    // Set up socket event listener for 'message'
    socket.on('message', (message) => {
        // Update the state with the new message
        setMessages((prevMessages) => [...prevMessages, message]);
    });

    return (
        <SendMessages sendMessage={sendMessage}  messages={messages} setInputValue={setInputValue} inputValue={inputValue}></SendMessages>
    );
};

export default SendMessage;
