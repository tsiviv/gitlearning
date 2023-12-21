const pool = require("../../connection");
const roomQuery = require("../queries/roomsQuery")
async function getUserRooms(userId) {
  const query = `
      SELECT rooms.*
      FROM users
      JOIN usersRooms ON users.id = usersRooms.userId
      JOIN rooms ON usersRooms.roomId = rooms.id
      WHERE users.id = $1;
    `;

  try {
    const result = await pool.query(query, [userId]);
    console.log("roomuser")
    console.log( result.rows)

    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

const postuserRoom = async (userId, nameRoom) => {
  try {
   console.log("jhdslgh")
    const result = await pool.query('INSERT INTO usersrooms (userId,roomId) VALUES ($1,$2) RETURNING *', [userId, nameRoom]);
    console.log(result.rows)
    return result.rows;
  } catch (error) {
    console.error('Error executing query', error);
    throw error;
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
  getUserRooms,
  postuserRoom
};
