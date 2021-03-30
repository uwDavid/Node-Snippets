// Connecting to PSQL
const express = require('express');
const path = require('path');
const app = express();
const pgp = require('pg-promise')(); //Note the options ()

// Using dotenv package
// var source = path.resolve(__dirname, '../.env'); 
// console.log(source);
require('dotenv').config({path: path.resolve(__dirname, "../.env")});

// Setting Express 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views')); 
// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up Database Connection - Change here
const connectionString = 
    `postgresql://${process.env.PSQLUSER}:${process.env.PSQLPWD}@localhost:5432/test`; 
console.log(connectionString);
const db = pgp(connectionString); 

app.get('/people', (req, res)=>{
    db.any("SELECT first_name FROM person LIMIT 3;")
    .then(
        rows => {
            console.log(rows); 
            res.json(rows);
        }
    )
    .catch(error=>{
        console.log(error);
    })
}); 

app.get('/', (req, res)=>{
    res.send("Home Page");
});

app.get('*', (req, res)=>{
    res.send("Any other routes here!");
});

app.listen(8080, ()=> console.log("Listening on PORT:8080..."));