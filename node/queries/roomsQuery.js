const pool = require("../../connection");

const getRoomId = async (roomName) => {
    try {
        console.log("rooms", roomName)
        const result = await pool.query('SELECT * FROM rooms WHERE roomName = $1', [roomName]);
        console.log(result.rows)
        return result.rows[0]; // Use [0] to get the first row if it0000000 exists
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};
const postRoom = async (room) => {
    const Room = await getRoomId(room)
    if (!Room) {
        try {
            const result = await pool.query('INSERT INTO rooms (roomName) VALUES ($1) RETURNING *', [room]);
            return result.rows; // Use [0] to get the first row if it exists
        } catch (error) {
            console.error('Error executing query', error);
            throw error;
        }
    }
    else return { message: `room ${room} exist already`, id: Room.id }
};
const getrooms = async () => {
    try {
        // Your getUsers logic using the pool.query
        const result = await pool.query('SELECT * FROM rooms');
        return result.rows
    } catch (error) {
        console.error('Error executing query', error);

    }
};
// Close the pool when the application is about to exit
process.on('exit', () => {
    console.log("Application is exiting");
    pool.end(() => {
        console.log("Connection pool closed");
    });
});

module.exports = {
    postRoom,
    getRoomId,
    getrooms
};
