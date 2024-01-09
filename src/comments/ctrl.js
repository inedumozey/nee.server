// const pool = require('../db/conn')
const Comment = require("./models");


module.exports = {
    getComments: async (req, res) => {
        try {
            // let data = await pool.query(`SELECT * FROM comments ORDER BY created_at DESC`)
            // data = data.rows

            const data = await Comment.find({}).sort({ createdAt: -1 }).select(["-__v", "-updatedAt"]);;

            res.status(201).json({ status: true, msg: "successful", data })
        } catch (e) {
            return res.status(500).json({ status: false, msg: "Server error, please contact admin" })
        }
    },

    postComments: async (req, res) => {
        try {
            const { body, name, email } = req.body;

            if (!body || !name || !email) {
                return res.status(400).json({ status: false, msg: "fill all required fields!" })
            }

            function checkEmail(email) {
                var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                return filter.test(email) ? true : false
            }

            if (!checkEmail(email)) {
                return res.status(405).json({ status: false, msg: "Email is invalid!" });
            }

            // create database data
            // let comments = await pool.query(`INSERT INTO
            //     comments(body, name, email)
            //     VALUES($1, $2, $3)
            //     RETURNING *`,
            //     [body, name, email]
            // )
            // comments = comments.rows[0];

            const comment = new Comment({ body, name, email })

            // save to database
            await comment.save();

            res.status(201).json({ status: true, msg: "Sent", data: comment })

        } catch (e) {
            return res.status(500).json({ status: false, msg: "Server error, please contact admin" })
        }
    },

    data: async (req, res) => {
        try {
            // let data = await pool.query(`SELECT * FROM comments ORDER BY created_at DESC`)
            // data = data.rows

            const data = await Comment.find({}).sort({ createdAt: -1 }).select(["-__v", "-updatedAt", "-_id"]);

            res.status(201).json({ status: true, msg: "successful", data })
        } catch (e) {
            return res.status(500).json({ status: false, msg: "Server error, please contact admin" })
        }
    },

    edit: async (req, res) => {
        try {
            const { id } = req.params;
            const { email } = req.body;

            // search for user using the email
            // const user = 
            // const data = await Comment.find({}).sort({ createdAt: -1 }).select(["-__v", "-updatedAt"]);;

            res.status(201).json({ status: true, msg: "successful", data })
        } catch (e) {
            return res.status(500).json({ status: false, msg: "Server error, please contact admin" })
        }
    },
}