const express = require("express")
const roomsRouter = express.Router()
const RoomsQuery = require("../controllers/roomControllers")

roomsRouter.route('/').get(RoomsQuery.getrooms);
roomsRouter.route('/').post(RoomsQuery.postrooms);

module.exports = roomsRouter;