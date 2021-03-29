var express = require('express');
var app = express();

app.get('/', (req, res)=>{
   res.send("Hello world!");
});

app.get('/search', (req,res)=>{
    const {q} = req.query; 
    if(!q){
        res.send("Not searching anything."); 
    }
    res.send(`Showing search result for ${q}.`); 
})

app.get('*', (req, res)=>{
    res.send("Any other routes here!");
});
 
app.listen(8080, ()=> console.log("Listing on PORT:8080..."));