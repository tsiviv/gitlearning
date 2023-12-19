const roomsQuery = require("../queries/roomsQuery");

const getrooms = async (req, res) => {
    try {
        const result = await roomsQuery.getrooms()
        res.send(result)
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};
const postrooms = async (req, res) => {
    try {
        const result = await roomsQuery.postRoom(req.body)
        res.send(result)
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};

module.exports = {
    getrooms,
    postrooms
};
