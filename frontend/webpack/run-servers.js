
const express = require('express')
const path = require('path')

const app1 = express().get("*", (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
})
const app2 = express().get("*", (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index2.html'));
})


app1.listen(3000);
app2.listen(3001);

console.log("Reader on port 3000")
console.log("Admin on port 3001")