import React from "react";
function Join({ socket, group, selectRoomtext }) {

    function join() {
        socket.emit('join', group, selectRoomtext);
    }
    return <>
        <button onClick={join}>join to new group</button>
    </>
}
export default Join;