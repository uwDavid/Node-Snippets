var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
   res.render("home");
});

app.get('*', (req, res)=>{
    res.send("Any other routes here!");
});
 
app.listen(8080, ()=> console.log("Listing on PORT:8080..."));