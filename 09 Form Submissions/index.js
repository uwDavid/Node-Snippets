const express = require('express');
const path = require('path');
const app = express();

// Setting Express 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views')); 
// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));

app.get('/data', (req, res)=>{
    console.log(req.body);
    res.send("GET method");
});

app.post('/data', (req, res)=>{
    console.log(req.body);
    const {material, qty} = req.body; 
    res.send(`Your ${material} has ${qty} in inventory.`);
});

app.get('*', (req, res)=>{
    res.send("Any other routes here!");
});
 
app.listen(8080, ()=> console.log("Listing on PORT:8080..."));