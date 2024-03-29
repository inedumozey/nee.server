const express = require("express");
const ctrl = require('./ctrl')

const routes = express.Router();

routes.post("/", ctrl.postComments)
routes.get("/", ctrl.getComments)
routes.get("/data", ctrl.data)
routes.get("/:id", ctrl.edit)
// routes.delete("/:id", ctrl.delete)

module.exports = routes;