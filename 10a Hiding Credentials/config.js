// Connecting to PSQL
const path = require('path'); 
var source = path.resolve(__dirname, '../.env'); 
// console.log(source);
require('dotenv').config({path: path.resolve(__dirname, "../.env")});

// var db = pgp('postgres://username:password@host:port/database')
// const db = pgp('postgres://process.env.PSQLUSER:process.env.PSQLPWD@localhost/test'); 
const {Pool} = require('pg')

const pool = new Pool({
    user: process.env.PSQLUSER, 
    host: 'localhost',
    database: 'test', 
    password: process.env.PSQLPWD, 
    port : 3000,
}); 

module.exports = {pool}; 