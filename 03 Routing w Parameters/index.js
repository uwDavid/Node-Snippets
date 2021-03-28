var express = require('express');
var app = express();

app.get('/', (req, res)=>{
   res.send("Hello world!");
});

app.get('/r/:subreddit', (req,res)=>{
    const {subreddit} = req.params; 
    res.send(`This is the ${subreddit} subreddit.`); 
})

app.get('/r/:subreddit/:postID', (req,res)=>{
    const {subreddit, postID} = req.params; 
    res.send(`This is the ${subreddit} subreddit. Viewing postID#: ${postID}`); 
})

app.get('*', (req, res)=>{
    res.send("Any other routes here!");
});
 
app.listen(8080, ()=> console.log("Listing on PORT:8080..."));