import React, { useEffect } from 'react';

function Rooms({setselectRoomtext,rooms,setselectRoom}) {
    const handleUserChange = (event) => {
        const selectedUser = event.target.value;
        const selectedRoom = rooms.find((room) => room.id === Number(selectedUser));
      
        if (selectedRoom) {
          setselectRoom(selectedUser);
          setselectRoomtext(selectedRoom.roomname);
          console.log(selectedRoom.roomname);
        }
      };
      useEffect(() =>{ if (rooms&&rooms.length>0)  setselectRoom(rooms[0].roomname)})

    return (<>
        <select  onChange={handleUserChange}>
            
            {rooms?.map((room) => <option value={room.id} >{room.roomname}</option>)}
        </select>
    </>)
}
export default Rooms;
