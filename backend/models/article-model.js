const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Movie = new Schema(
    {
        article_id: {type: String, required: true, unique: true},
        article_authors: {type: [String], required: true},
        article_title: {type: String, required: true}, 
        article_img: {type: String},
        article_img_desc: {type: String},
        article_teaser: {type: String}, 
        article_text: {type: String, required: true}


    },
    {timestamps: true},
)

module.exports = mongoose.model('movies', Movie); 