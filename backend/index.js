const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./db'); 
const article = require("./routes/article-router"); 
const author = require("./routes/author-router"); 


require('dotenv').config(); 

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error: ')); 

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api', article); 
// app.use('/api', author); 

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});