import { useEffect } from "react";
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Box, TextField, Button, List, ListItem } from '@mui/material';

import ChatMessage from "./Message";

function Joinc({ joinus, message }) {

  return (<>
    <ChatMessage message={message}></ChatMessage>
    <Box
      sx={{
        position: 'absolute',
        bottom: '30px', /* Adjust as needed */
        left: '50%',
        transform: 'translateX(-50%)', /* Center horizontally */
      }}
    >
      <Button onClick={joinus}>join this room</Button>
    </Box>    </>)
}
export default Joinc;