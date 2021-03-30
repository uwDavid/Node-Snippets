# 10 Connecting to PSQL
To connect to PostgresSQL we will have to use a driver `pg-promise`. 
Visit the full documentation [here](https://github.com/vitaly-t/pg-promise). 
For other drivers, visit Express's official documentation [here](https://expressjs.com/en/guide/database-integration.html). 

### **Step 1:** Install `pg-promise`
```
$ npm install pg-promise
```

### **Step 2:** Require package in app
```javascript
const pgp = require('pg-promise')();    // Note the options () here
var db = pgp('postgres://username:password@host:port/database');
app.use(express.json());
```
It is important to include the options () on the `require('pgp-promise')()`. 

### Example Quick Setup
```javascript
const express = require('express');
const pgp = require('pg-promise')();
const connectionString = 
    "postgresql://tester:password@localhost:5432/test"; 

const db = pgp(connectionString); 
const port = 3000; 
const app = express(); 
const db = require('./db'); 

app.use(express.json()); 

app.get('/', (req, res)=>{
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

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`); 
})
```
Although we are just hard-coding it here. We should be more concious about protecting our credentials. 
See 10a on information about hiding credentials.

Also see 10b on how we can pre-load data into PostgreSQL. 