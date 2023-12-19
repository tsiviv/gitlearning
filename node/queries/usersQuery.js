const pool = require("../../connection");

const getUser = async (name) => {
    try {
        const result = await pool.query('SELECT * FROM users WHERE name = $1', [name]);
        return result.rows[0]; // Use [0] to get the first row if it exists
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};
const getUsers = async () => {
    try {
      // Your getUsers logic using the pool.query
      const result = await pool.query('SELECT * FROM users');
      return result.rows
    } catch (error) {
      console.error('Error executing query', error);
    //   res.status(500).send('Internal Server Error');
    }
  };
const getUserByid = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0]; // Use [0] to get the first row if it exists
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};
const postUser = async (id, name,socketId) => {
    console.log(socketId)
    try {
        const existingUser = await getUserByid(id);
        console.log(existingUser, id, name)
        if (existingUser) {
            // User already exists, update the user
            return await updateUser(id, name,socketId);
        } else {
            // User doesn't exist, insert a new user
            const result = await pool.query('INSERT INTO users (id, name,socketId) VALUES ($1, $2,$3) RETURNING *', [id, name,socketId]);
            return result.rows[0];
        }
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};

const updateUser = async (id, name,socketId) => {
    try {
        const result = await pool.query('UPDATE users SET name = $1 ,socketId=$2 WHERE id = $3 RETURNING *', [name,socketId, id]);
        return result.rows[0];
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
    getUser,
    getUsers,
    postUser,
    updateUser
};
