const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./Models/product');

mongoose.connect('mongod://localhost:27017/farmStand', {useNewURLParser:true, useUnifiedTopology: true})
.then( ()=>{
    console.log('Connection open!');
})
.catch( err => {
    console.log(err);
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res)=>{
    res.send('Woof!');
})

app.listen(3000, ()=>{
    console.log("App started on PORT 3000");
})