const mongoose = require("mongoose");
require("dotenv").config()

const URL = process.env.MONGO_URL

async function conn() {
    try {
        mongoose.connect(URL)
        console.log("Database connect");
    }
    catch (e) {
        console.log("Error connecting to database")
        process.exit(1)
    }
}

module.exports = conn;