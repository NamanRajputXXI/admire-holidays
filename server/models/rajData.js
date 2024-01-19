const mongoose = require("mongoose")

const RajasthanSchema = new mongoose.Schema({
    heading: String,
    subHeading: String,
})

module.exports = mongoose.model("Rajasthan", RajasthanSchema)