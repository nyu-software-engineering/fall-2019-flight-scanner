const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Author = new Schema(
    {
        author_id: {type: String, required: true, unique: true}, 
        author_first_name: {type: String, required: true}, 
        author_last_name: {type: String, required: true}, 
        author_email: {type: String},
        author_profile_url: {type: String},
        author_role: {type: String, required: true}, //controlled vocabulary? 
        author_bio: {type: String} //word limit? 

    },
    {timestamps: true},
)

module.exports = mongoose.model('author', Author); 