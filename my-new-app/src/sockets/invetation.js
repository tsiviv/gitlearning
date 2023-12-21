import React, { useEffect, useState } from 'react';
import Invitation from '../components/invetation'; // Adjust the path accordingly
import Button from '@mui/material/Button';

const Invitations = ({ socket, selectUser }) => {
    const [invitations, setInvitations] = useState([]);
    const [group, setgroup] = useState([]);
    const [flag, setflag] = useState(false);

    // Assuming you have a socket instance and it emits 'inventation' event
    function talk() {
        socket.emit('talk', selectUser);
    }
    useEffect(() => {
        socket.on('inventation', (message, group) => {
            setflag(true)
            console.log("pjli")
            setInvitations(message)
            setgroup(group)
        })
    },[])


    const handleJoinFriend = (selectUser) => {
        socket.emit('joinFriend', selectUser);
    };

    return (
        <>
            <Button onClick={talk}>send invetation to {selectUser}</Button>
            {flag ? (
                <>
                    <Invitation
                        message={invitations}
                        group={group}
                        onJoinFriend={handleJoinFriend}
                    />
                </>
            ) :
                <></>}</>)
};

export default Invitations;
