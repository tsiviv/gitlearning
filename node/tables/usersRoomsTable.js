const connect = require("../../connection");

const newTableFromQuery = async () => {
    const db = await connect.connect();

    const query = `    
    CREATE TABLE IF NOT EXISTS usersRooms (
        id SERIAL  PRIMARY KEY,
        userId INTEGER REFERENCES users(id),
        roomId INTEGER REFERENCES rooms(id)
    )`;
    
    try {
        await db.query(query);  // sends query
    } finally {
        await db.end();  // closes connection
    }
};

newTableFromQuery();
