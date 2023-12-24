import { useEffect } from "react";
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Box, TextField, Button, List, ListItem } from '@mui/material';

import ChatMessage from "./Message";

function Joinc({ joinus, message,selectRoomtext }) {

  return (<>
    
    
      <Button onClick={joinus}>join {selectRoomtext} room</Button>
      <ChatMessage message={message}></ChatMessage>
      </>)
}
export default Joinc;