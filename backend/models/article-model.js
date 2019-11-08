const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Article = new Schema(
    {
        article_id: {type: String, required: true, unique: true},
        article_authors: {type: [String], required: true},
        article_title: {type: String, required: true}, 
        article_img: {type: String},
        article_img_desc: {type: String},
        article_teaser: {type: String}, 
        article_text: {type: String, required: true}, 
        article_category: {type: String, requried: true}, // still need to figure out indexing
        article_date: {type: Date, required: true}, 
        article_status: {type: String, required: true} //controlled vocabulary? 

    },
    {timestamps: true},
)

module.exports = mongoose.model('article', Article); 