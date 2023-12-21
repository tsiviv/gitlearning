import { useEffect } from "react";
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';



function Addroomc({ setNewRoom,handleAddRoom,newRoom}) {
    const handleNewRoomChange = (event) => {
        setNewRoom(event.target.value);
    };
    return (<>
         <InputLabel htmlFor="newroom">Enter new room:</InputLabel>
      <Input
        type="text"
        id="newroom"
        value={newRoom}
        onChange={handleNewRoomChange}
      />
      <Button onClick={handleAddRoom}>Add Room</Button> 
    </>)
}
export default Addroomc;