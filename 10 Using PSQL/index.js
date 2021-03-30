const express = require('express');
const path = require('path');
const app = express();
const pgp = require('pg-promise'); 
const bodyParser = require('body-parser');
const {pool} = require('./config');

// Setting Express 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views')); 
// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json);

// Testing connection
console.log(pool.options.user); 
/*
const getPerson = (req, res)=>{
    pool.query('SELECT * FROM person LIMIT 3', (err, results)=>{
        if(err){
            throw err;
        }
        console.log(results);
        response.status(200).json(results.rows);
    })
}

app.get('/person', getPerson); 
*/
app.get('/', (req, res)=>{
    res.send("Home");
});

app.get('*', (req, res)=>{
    res.send("Any other routes here!");
});

app.listen(8080, ()=> console.log("Listing on PORT:8080..."));