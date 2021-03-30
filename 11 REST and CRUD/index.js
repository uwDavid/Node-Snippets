const express = require('express');
const path = require('path');
const app = express();
const pgp = require('pg-promise')(); //Note the options ()

// Setting Express 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views')); 
// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up Database Connection
const db = require('../db');  

app.get('/people', (req, res)=>{
    db.any("SELECT * FROM people")
    .then(
        rows => {
            console.log(rows); 
            res.render('people', {rows});
        }
    )
    .catch(error=>{
        console.log(error);
    })
}); 

app.get('/people/:id', (req, res)=>{
    const {id} = req.params; 
    db.any('SELECT * FROM people WHERE id=$1',id)
    .then(
        rows => {
            console.log(rows); 
            res.render('people', {rows});
        }
    )
    .catch(error=>{
        console.log(error);
    })
}); 

app.post('/people', (req,res)=>{
    const {first_name, last_name, email, gender, date_of_birth, country_of_birth} = req.body;
    console.log(date_of_birth);
    db.none('INSERT INTO people (first_name, last_name, email, gender, date_of_birth, country_of_birth) VALUES ($1, $2, $3, $4, $5, $6)', 
    [first_name, last_name, email, gender, date_of_birth, country_of_birth])
    .then(
        ()=> {res.redirect('back');}
    )
    .catch( err =>{
        console.log(err);
    });
}); 

app.get('/', (req, res)=>{
    res.send("Home Page");
});

app.get('*', (req, res)=>{
    res.send("Any other routes here!");
});

app.listen(8080, ()=> console.log("Listening on PORT:8080..."));
