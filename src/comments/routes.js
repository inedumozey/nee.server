const express = require("express");
const ctrl = require('./ctrl')

const routes = express.Router();

routes.post("/", ctrl.postComments)
routes.get("/", ctrl.getComments)
routes.put("/:id", ctrl.editComments)
routes.delete("/:id", ctrl.deleteComments)

module.exports = routes;