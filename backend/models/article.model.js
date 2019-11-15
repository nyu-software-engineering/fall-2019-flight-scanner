const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Article = new Schema(
    {
        articleId: {type: String, required: true, unique: true},
        articleAuthors: {type: [String], required: true}, //Couldn't get String Array to show
        articleTitle: {type: String, required: true}, 
        articleImg: {type: String, required: true},
        articleImgDesc: {type: String, required: true},
        articleTeaser: {type: String, maxlength: 200, required: true}, 
        articleText: {type: String, required: true}, 
        articleCategory: {type: String, required: true, index: true}, // still need to figure out indexing
        articleDate: {type: Date, required: true}, 
        articleStatus: {type: String, required: true} //controlled vocabulary? 

    },
    {timestamps: true},
)

module.exports = mongoose.model('article', Article); 