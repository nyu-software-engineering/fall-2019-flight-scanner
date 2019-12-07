const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Author = new Schema(
    {
        authorFirstName: {type: String, required: true}, 
        authorLastName: {type: String, required: true}, 
        authorEmail: {type: String},
        authorProfileUrl: {type: String},
        authorRole: {type: String, required: true}, //controlled vocabulary? 
        authorAccess: {type: String, required: true},    
        authorBio: {type: String, maxlength: 1000} 
    },
    {timestamps: true},
)

module.exports = mongoose.model('author', Author); 