const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Article = new Schema(
    {
        articleId: {type: String, required: true, unique: true},
        articleAuthors: {type: [String], required: true}, //Couldn't get String Array to show
        articleTitle: {type: String, required: true}, 
        articleImg: {type: String},
        articleImgDesc: {type: String},
        articleTeaser: {type: String}, 
        articleText: {type: String, required: true}, 
        articleCategory: {type: String, requried: true}, // still need to figure out indexing
        articleDate: {type: Date, required: true}, 
        articleStatus: {type: String, required: true} //controlled vocabulary? 

    },
    {timestamps: true},
)

module.exports = mongoose.model('article', Article); 