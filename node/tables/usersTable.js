const connect = require("../../connection");

const newTableFromQuery = async () => {
  const db = await connect.connect();

  const query = `    
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        socketId VARCHAR(100) NOT NULL
    )`;
  
  try {
    await db.query(query);
  } finally {
    await db.end();
  }
};


// Example usage
newTableFromQuery();
