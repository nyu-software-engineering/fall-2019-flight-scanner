const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const articlesRouter = require('./routes/article');
app.use('/article', articlesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});