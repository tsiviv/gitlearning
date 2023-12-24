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
  useEffect(() => { if (rooms && rooms.length > 0) { setselectRoom(rooms[0].id); setselectRoomtext(rooms[0].roomname); } },[])

  return (<>

    
      <FormControl sx={{ maxWidth: '400px', width: '100%' }}
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
    
  </>)
}
export default Rooms;
