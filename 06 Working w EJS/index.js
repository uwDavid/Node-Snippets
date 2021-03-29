var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// Simple Example
app.get('/', (req, res)=>{
    const num = 3.14159; 
   res.render("numbers", {rand:num});
});

// Subreddit Example for params
app.get('/r/:subreddit', (req, res)=>{
    const {subreddit} = req.params; 
    const {q} = req.query; 
    res.render("subreddit", {subreddit, q});
});

// Loop Example
app.get('/all', (req, res)=>{
    const allDogs = ['Crusty', 'Bart', 'Murph', 'Simon' ]; 
    res.render("lists", {allDogs});
});

app.get('*', (req, res)=>{
    res.send("Any other routes here!");
});
 
app.listen(8080, ()=> console.log("Listing on PORT:8080..."));