import React from 'react';

const Invitation = ({ message, group, onJoinFriend }) => {
  const handleJoinFriend = () => {
    onJoinFriend(group);
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleJoinFriend}>Join to {group}</button>
      <br />
      <br />
    </div>
  );
};

export default Invitation;
