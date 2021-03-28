var express = require('express');
var app = express();

app.get('/', (req, res)=>{
   res.send("Hello world!");
});

app.get('/cats', (req, res)=>{
    res.send("Kitties!");
 });

  
app.get('/dogs', (req, res)=>{
    res.send("Puppies!");
 });

 app.get('*', (req, res)=>{
    res.send("Any other routes here!");
 });
 
app.listen(8080, ()=> console.log("Listing on PORT:8080..."));