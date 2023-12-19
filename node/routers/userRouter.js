const express = require("express")
const userRouter = express.Router()
const userQuery = require("../controllers/userControler")

userRouter.route('/').get(userQuery.getUsers);
module.exports = userRouter;