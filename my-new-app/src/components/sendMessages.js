import Button from '@mui/material/Button';
import React from 'react';
import { Box, TextField } from '@mui/material';
import ChatInput from './GetMessage';
function SendMessages({ sendMessage, messages, setInputValue, inputValue }) {
    return <><div>
        {/* Your component UI */}
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: '30px',
                left: '50%',
                transform: 'translate(-50%, 50%)',
                maxWidth: '400px', /* Adjust this for overall container width if needed */
                padding: '10px',
                backgroundColor: '#f0f0f0',
            }}
        >
            <TextField
                sx={{ width: '500px' }} /* Set input field width independently */
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
        <ChatInput messages={messages}></ChatInput>

    </div></>
}
export default SendMessages;