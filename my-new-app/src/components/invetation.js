import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ChatMessage from './Message';

const Invitation = ({ message, group, onJoinFriend }) => {
  const [flag,setflag]=useState(true)
  const handleJoinFriend = () => {
    setflag(false)
    onJoinFriend(group);
  };
  const handleNotJoinFriend = () => {
    setflag(false)
    
  };
  return (
   flag? <div>
      <ChatMessage message={message} flag={true}></ChatMessage>
      <Button onClick={handleJoinFriend}>i want to join to {group}</Button>
      <Button onClick={handleNotJoinFriend}>i am sorry i dont want to join {group}</Button>
    </div>:<></>
  );
};

export default Invitation;
