const mongoose = require('mongoose'); 

mongoose
    .connect('mongodb+srv://user0:notapassword@cluster0-bxhmn.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

    .catch(e =>{
        console.error('Connection error', e.message)
    }); 

const db = mongoose.connection; 
db.once('open', () =>{
    console.log("MongoDB database connection established successfully"); 
})
module.exports = db; 