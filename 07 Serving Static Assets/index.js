const express = require('express');
const path = require('path');
const app = express();

// Set template to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views')); 

// Set public dir 
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res)=>{
   res.render("home");
});

app.get('*', (req, res)=>{
    res.send("Any other routes here!");
});
 
app.listen(8080, ()=> console.log("Listing on PORT:8080..."));