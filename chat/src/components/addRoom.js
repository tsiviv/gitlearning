import { useEffect } from "react";

function Addroomc({ setNewRoom,handleAddRoom,newRoom}) {
    const handleNewRoomChange = (event) => {
        setNewRoom(event.target.value);
    };
    return (<>
         <label htmlFor="newroom">Enter new room:</label>
      <input
        type="text"
        id="newroom"
        value={newRoom}
        onChange={handleNewRoomChange}
      />
      <button onClick={handleAddRoom}>Add Room</button> 
    </>)
}
export default Addroomc;