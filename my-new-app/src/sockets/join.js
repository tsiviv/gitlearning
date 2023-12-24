import React, { useState } from "react";
import Joinc from "../components/join";

function Join({ socket, selectRoom, selectRoomtext }) {
    const [message, setmessage] = useState("")
    function joinus() {
        console.log(selectRoom)
        socket.emit('join', selectRoom, selectRoomtext);
    }
    socket.on('message', (message) => {
        setmessage(message)
    });

    return <>
        <Joinc joinus={joinus} message={message} selectRoomtext={selectRoomtext}></Joinc>
    </>
}
export default Join;