const express = require("express");
const ctrl = require('./ctrl')

const routes = express.Router();

routes.post("/", ctrl.postComments)
routes.get("/", ctrl.getComments)

module.exports = routes;