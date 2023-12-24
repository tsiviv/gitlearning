import Button from '@mui/material/Button';
import React from 'react';
import { Box, TextField } from '@mui/material';
import ChatInput from './GetMessage';
import ChatMessage from './Message';
function SendMessages({ sendMessage, messages, setInputValue, inputValue }) {
    return <><div>
        {/* Your component UI */}
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // height: '100vh', // Set the height to full viewport height
                // backgroundColor: '#f0f0f0',
            }}
        >
            <TextField
                sx={{ width: '500px' }}
                variant="outlined"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        sendMessage();
                    }
                }}
            />
        </Box>


        <ChatMessage message={messages}></ChatMessage>
    </div ></>
}
export default SendMessages;