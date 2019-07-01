var mongoose = require('mongoose')

const articlesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})
mongoose.exports = mongoose.model('Articles', articlesSchema)