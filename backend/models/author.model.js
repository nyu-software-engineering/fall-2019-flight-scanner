const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Author = new Schema(
    {
        authorId: {type: String, required: true, unique: true}, 
        authorFirstName: {type: String, required: true}, 
        authorLastName: {type: String, required: true}, 
        authorEmail: {type: String},
        authorProfileUrl: {type: String},
        authorRole: {type: String, required: true}, //controlled vocabulary? 
        authorBio: {type: String} //word limit? 

    },
    {timestamps: true},
)

module.exports = mongoose.model('author', Author); 