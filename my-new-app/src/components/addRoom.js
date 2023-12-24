import { useEffect } from "react";
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Box, TextField, Button, List, ListItem } from '@mui/material';



function Addroomc({ setNewRoom, handleAddRoom, newRoom }) {
  const handleNewRoomChange = (event) => {
    setNewRoom(event.target.value);
  };
  return (<>
    <Box sx={{ textAlign: 'left' }}>
      <InputLabel htmlFor="newroom">Enter new room:</InputLabel>
      <Input
        type="text"
        id="newroom"
        value={newRoom}
        onChange={handleNewRoomChange}
        sx={{ marginBottom: '20px', direction: 'ltr' }} // Set direction to left-to-right
        />
        <br></br>
      <Button onClick={handleAddRoom}>Add Room</Button>
    </Box>

  </>)
}
export default Addroomc;