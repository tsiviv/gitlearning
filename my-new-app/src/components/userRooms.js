import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import React, { useEffect } from 'react';

const UserRoomsc = ({ setselectRoomUsertext,selectRoomUsertext, rooms, who, selectRoomUser, setselectRoomUser }) => {
  useEffect(() => {
    if (rooms && rooms.length > 0) {setselectRoomUsertext(rooms[0].roomname)
      setselectRoomUser(rooms[0].id); 
    }
  }, [])
  function update(e) {
    console.log(selectRoomUsertext)
    setselectRoomUser(e.id)
    setselectRoomUsertext(e.roomname)
  }
  return (
    <Box sx={{ textAlign: 'right' }}>
      <List>
        {rooms?.map((room) => (
          <ListItem
            key={room.id}
            selected={selectRoomUser === room.id}
            onClick={() => update(room)}
            sx={{
              backgroundColor: selectRoomUser === room.id ? '#cfe8fc' : '#15486', // Change the color as needed
            }}
          >
            <ListItemText primary={room.roomname} />
          </ListItem>
        ))}
      </List>
    </Box >
  );
};
export default UserRoomsc;
