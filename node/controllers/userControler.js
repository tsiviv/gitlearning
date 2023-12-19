const userQuery = require("../queries/usersQuery");

const getUser = async (req, res) => {
    try {
        const { username } = req.params
        const result = await userQuery.getUser(username)
        res.send(result)
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};
const getUsers = async (req, res) => {
    try {
        const result = await userQuery.getUsers()
        res.send(result)
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};

const postUser = async (req, res) => {
    try {
        const result = await userQuery.postUser(req.body.userId, req.body.username, req.body.socketId)
        res.send(result)
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
}
const updateUser = async (req, res) => {
    try {
        const result = await userQuery.updateUser(req.body.userId, req.body.username, req.body.socketId)
        res.send(result)
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
    }
};

// Close the pool when the application is about to exit


module.exports = {
    getUser,
    getUsers,
    postUser,
    updateUser
};
