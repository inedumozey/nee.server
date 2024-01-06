const express = require("express")
const pool = require("./conn")
const tables = require("./tables")
const route = express.Router()

async function query() {
    try {
        // const data = await pool.query("SELECT * FROM users")
        // console.log(data.rows)

        // const h = await pool.query("DELETE FROM users WHERE email ='drmo2@gmail.com'")
        // console.log(h)

        // const result = await pool.query("DROP TABLE comments");
        // console.log(result)

        // const result = await pool.query("CREATE EXTENSION IF NOT EXISTS 'uuid-ossp'")
        // console.log(result)
    }
    catch (err) {
        console.log(err)
    }
}
// query()


route.get("/comments", async (req, res) => {
    try {
        await pool.query(tables.createUser);
        res.send("Comments' Table Created")
    }
    catch (err) {
        return res.status(500).json({ status: false, msg: err.message });
    }
});


module.exports = route

