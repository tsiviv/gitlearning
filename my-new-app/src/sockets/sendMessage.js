import React, { useState } from 'react';
import SendMessages from '../components/sendMessages';
const SendMessage = ({ socket, selectRoomUser,selectRoomUsertext }) => {
    const [messages, setMessages] = useState("");
    const [inputValue, setInputValue] = useState('');

    const sendMessage = () => {
        // Assuming you have a socket instance
        console.log(selectRoomUser,inputValue,selectRoomUsertext )
        socket.emit('message', inputValue, selectRoomUsertext);
    };

    // Set up socket event listener for 'message'
    socket.on('message', (message) => {
        console.log(message)
        setMessages(message);
    });

    return (
        <SendMessages sendMessage={sendMessage}  messages={messages} setInputValue={setInputValue} inputValue={inputValue}></SendMessages>
    );
};

export default SendMessage;
