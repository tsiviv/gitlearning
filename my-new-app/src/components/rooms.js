import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { Box, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
function Rooms({ setselectRoomtext, rooms, setselectRoom, who }) {
  const handleUserChange = (event) => {
    const selectedUser = event.target.value;
    const selectedRoom = rooms.find((room) => room.id === Number(selectedUser));
    console.log(selectedUser)
    if (selectedRoom) {
      setselectRoom(selectedUser);
      setselectRoomtext(selectedRoom.roomname);
      console.log(selectedRoom.roomname);
    }
  };
  useEffect(() => { if (rooms && rooms.length > 0) { setselectRoom(rooms[0].id); setselectRoomtext(rooms[0].roomname); } })

  return (<>

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end', /* Right-align content */
        alignItems: 'center',
        position: 'absolute',
        top: '50px', /* Adjust as needed */
        left: '10px', /* Adjust as needed */
        maxWidth: '800px', /* Set maximum width */
      }}
    >
      <FormControl /* Removed fullWidth */
        sx={{ m: 3 ,width: '100%'}} /* Add some margin for spacing */
      >
        <InputLabel id="demo-simple-select-label">{who}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={who}
          onChange={handleUserChange}
        >
          {rooms?.map((room) => <MenuItem value={room.id}>{room.roomname}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  </>)
}
export default Rooms;
