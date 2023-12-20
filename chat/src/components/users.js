import React, { useEffect } from 'react';

function Users({ users, setselectUser }) {
    const handleUserChange = (event) => {
        const selectedUser = event.target.value;
        setselectUser(selectedUser);

    };
    useEffect(() => { if (users) setselectUser(users[0].name) }
    )
    return (
        <select onChange={handleUserChange}>
            {users?.map((user) => (
                <option key={user.name} value={user.name}>
                    {user.name}
                </option>
            ))}
        </select>
    );
}

export default Users;
