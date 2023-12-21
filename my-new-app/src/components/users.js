import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Users({ users, setselectUser }) {
    const handleUserChange = (event) => {
        const selectedUser = event.target.value;
        setselectUser(selectedUser);

    };
    useEffect(() => { if (users) setselectUser(users[0].name) }
    )
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">users</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="users"
                onChange={handleUserChange}
            >
                {users?.map((user) => (
                    <MenuItem key={user.name} value={user.name}>
                        {user.name}
                    </MenuItem>
                ))}

            </Select>
        </FormControl>

    );
}

export default Users;
