const mongoose = require('mongoose')

const PeopleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: String,
    title: String
}, {timestamps: true})

// module
const People = mongoose.model("People", PeopleSchema)

// export
module.exports = People