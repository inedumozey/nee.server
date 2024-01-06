const express = require("express");
require("dotenv").config()
const cors = require("cors");
const app = express()
const bodyParser = require("body-parser");
const conn = require("./src/config/dbConnection")

app.use(cors({
    origin: "*"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
// bodyParser.json()

// connect database
conn();


// create database enpoint
app.use('/api/v1/db/create-tables', require('./src/db/createTables'));

//routers
app.use("/api/v1", require("./src/comments/routes"))


// listen to server
const PORT = process.env.PORT | 4000
app.listen(PORT, () => {
    console.log(`Server connected on port ${PORT}`);
})