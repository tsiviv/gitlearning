const connect = require("../../connection");

const newTableFromQuery = async () => {
    const db = await connect.connect();

    const query = `    
    CREATE TABLE IF NOT EXISTS rooms (
        id SERIAL  PRIMARY KEY,
        roomName VARCHAR(100) NOT NULL
    )`;
    
    try {
        await db.query(query);  // sends query
    } finally {
        await db.end();  // closes connection
    }
};

newTableFromQuery();
