const mongoose = require("mongoose");
mongoose.connect("").then(() => {
    console.log("Connect to MongoDB");
})
.catch(() => {
    console.log("Failed to connect to MongoDB");
});

const newSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    }
})

const msgcol = mongoose.model("msgcol", newSchema)

module.exports = msgcol;