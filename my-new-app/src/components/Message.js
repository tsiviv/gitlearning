import React from 'react';
import { Box, Paper } from '@mui/material';

const ChatMessage = ({ message,flag }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh', // Set the height to full viewport height
      }}
    >
      <Paper elevation={3} sx={{ padding: 2, maxWidth: '400px' }}>
        {/* Your ChatMessage content goes here */}
        {message}
      </Paper>
      
    </Box>
  );
};

export default ChatMessage;
