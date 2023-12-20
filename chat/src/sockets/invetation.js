import React, { useState } from 'react';
import Invitation from '../components/invetation'; // Adjust the path accordingly

const Invitations = ({ socket, selectUser }) => {
    const [invitations, setInvitations] = useState([]);
    const [group, setgroup] = useState([]);
    // Assuming you have a socket instance and it emits 'inventation' event
    function talk() {
        socket.emit('talk', selectUser);
    }
    socket.on('inventation', (message, group) => {
        setInvitations(message)
        setgroup(group)
    });

    const handleJoinFriend = (selectUser) => {
        socket.emit('joinFriend', selectUser);
    };

    return (
        <div>
            <button onClick={talk}>join</button>
            <h1>Invitations</h1>

            <Invitation

                message={invitations}
                group={group}
                onJoinFriend={handleJoinFriend}
            />

        </div>
    );
};

export default Invitations;
