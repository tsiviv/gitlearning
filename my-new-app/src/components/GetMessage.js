import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, List, ListItem } from '@mui/material';

const ChatInput = ({messages}) => {
  

  useEffect(() => {
    

  }, []);

 
  return (
    <Box>
      <List sx={{ overflowY: 'scroll', height: '300px' }}>
        {messages.map((message) => (
          <ListItem key={message.id}>{message.username}: {message.message}</ListItem>
        ))}
      </List>
      
    </Box>
  );
};

export default ChatInput;