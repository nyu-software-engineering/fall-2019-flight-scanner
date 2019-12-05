const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Article = new Schema(
    {
        articleId: {type: String, required: true, unique: true},
        articleAuthor: {type: String, required: true}, //changed to single author
        articleTitle: {type: String, required: true}, 
        articleImg: {type: String, required: true},
        articleImgDesc: {type: String, required: true},
        articleTeaser: {type: String, maxlength: 200, required: true}, 
        articleText: {type: String, required: true}, 
        articleCategory: {type: String, required: true, index: true}, // still need to figure out indexing. Indexing sorted - Abdullah 
        articleDate: {type: Date, required: true}, 
        articleStatus: {type: String, required: true}, //controlled vocabulary? 
        articleKeywords : {type: String, required: true}
    },
    {timestamps: true},
)

module.exports = mongoose.model('article', Article); 