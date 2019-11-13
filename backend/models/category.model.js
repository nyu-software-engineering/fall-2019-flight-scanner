const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Category = new Schema(
    { 
        categoryName: {type: String, required: true, unique: true}
    },
    {timestamps: true},
)

module.exports = mongoose.model('category', Category); 