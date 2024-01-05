const domcleanup = require("@mozeyinedu/domcleanup");
const Comment = require("./models")

module.exports = {
    getComments: async (req, res) => {
        try {
            const data = await Comment.find({});

            res.status(201).json({ status: true, msg: "successful", data })
        } catch (e) {
            return res.status(500).json({ status: false, msg: "Server error, please contact admin" })
        }
    },

    postComments: async (req, res) => {
        try {
            const { body, name, email } = req.body;

            if (!body || !name || !email) {
                return res.status(400).json({ status: false, msg: "All fields are required!" })
            }

            // create database data
            const comment = new Comment({ body, name, email })

            // save to database
            await comment.save();

            res.status(201).json({ status: true, msg: "Sent", data: comment })
        } catch (e) {
            return res.status(500).json({ status: false, msg: "Server error, please contact admin" })
        }
    },

    editComments: async (req, res) => {
        try {
            const { id } = req.params;
            const { body, name, email } = req.body;

            if (!body || !name || !email) {
                return res.status(400).json({ status: false, msg: "All fields are required!" })
            }
            const data = await Comment.findOneAndUpdate({ _id: id }, { $set: { body, name, email } }, { new: true });



            res.status(201).json({ status: true, msg: "Updated", data })
        } catch (e) {
            return res.status(500).json({ status: false, msg: "Server error, please contact admin" })
        }
    },

    deleteComments: async (req, res) => {
        try {
            const { id } = req.params;
            await Comment.findOneAndDelete({ _id: id });

            res.status(201).json({ status: true, msg: "deleted", data: id })
        } catch (e) {
            return res.status(500).json({ status: false, msg: "Server error, please contact admin" })
        }
    },
}