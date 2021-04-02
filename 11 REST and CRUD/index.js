const express = require('express');
const path = require('path');
const app = express();
const pgp = require('pg-promise')(); //Note the options ()
const methodOverride = require('method-override');

// Setting Express 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views')); 
// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method')); 

// Setting up Database Connection
const db = require('../db');  

// Homepage
app.get('/', (req, res)=>{
    res.render('home');
})

// Index - show all people
app.get('/people', (req, res)=>{
    db.any("SELECT * FROM people")
    .then(
        rows => {
            res.render('people/index', {rows});
        }
    )
    .catch(error=>{
        console.log(error);
    })
}); 

// New - create a person 
app.get('/people/new', (req, res)=>{
    res.render('people/new');
})

// POST route to create new person
app.post('/people', (req,res)=>{
    const {first_name, last_name, email, gender, date_of_birth, country_of_birth} = req.body;
    console.log(date_of_birth);
    db.none('INSERT INTO people (first_name, last_name, email, gender, date_of_birth, country_of_birth) VALUES ($1, $2, $3, $4, $5, $6)', 
    [first_name, last_name, email, gender, date_of_birth, country_of_birth])
    .then(
        ()=> {res.redirect('people');}
    )
    .catch( err =>{
        console.log(err);
    });
}); 

// Show - display 1 person
app.get('/people/:id', (req, res)=>{
    const {id} = req.params; 
    db.one('SELECT * FROM people WHERE id=$1',id)
    .then(
        row => {
            res.render('people/show', {row});
        }
    )
    .catch(error=>{
        console.log(error);
    })
}); 

// Edit - update 1 person 
app.get('/people/:id/edit', (req, res)=>{
    db.one('SELECT * FROM people WHERE id=$1', req.params.id)
    .then(
        row =>{
            res.render('people/edit', {row});
        }
    )
    .catch( err => {
        console.log(err);
    })
}); 

// PUT - update person 
app.put('/people/:id', (req, res)=>{
    db.none('UPDATE people SET first_name=$1, last_name=$2, email=$3, gender=$4, date_of_birth=$5, country_of_birth=$6 WHERE id=$7', 
    [req.body.first_name, req.body.last_name, req.body.email, req.body.gender, req.body.date_of_birth, req.body.country_of_birth, req.params.id])
    .then(
        ()=> {res.redirect(`/people/${req.params.id}`);}
    )
    .catch(
        err => {console.log(err)}
    )
}); 


// DELETE - delete a person 
app.delete('/people/:id', (req, res)=>{
    db.none('DELETE FROM people WHERE id=$1', req.params.id)
    .then(
        ()=> {res.redirect('/people');}
    )
    .catch(
        err => {console.log(err)}
    )
}); 

app.get('*', (req, res)=>{
    res.send("Any other routes here!");
});

app.listen(8080, ()=> console.log("Listening on PORT:8080..."));
