# 11 REST and CRUD
REST is a way to organize your website and expose database CRUD operations. 
There are many ways to achieve RESTful representation this is only an example. 

| Database Operation | Path Name | Path | HTTP Verb | Description | 
| --- | --- | --- | --- | --- |
| READ | Index | /comments | GET | Display all comments |
| READ | Show | /comments/:id | GET | Display one specific comment |
| CREATE | Create | /comments | POST | Create a new comment in database |
| UPDATE | Update | /comments/:id | PATCH | Update one specific comment |
| DELETE | Destory | /comments/:id | DELETE | Delete one specific comment |
| OTHER | New | /comments/new | GET | Display form to create new comment |
| OTHER | Edit | /comments/:id/edit | GET | Display form to edit a specific comment |

### READ
| Database Operation | Path Name | Path | HTTP Verb | Description | 
| --- | --- | --- | --- | --- |
| READ | Index | /people | GET | Display all people |
| READ | Show | /people/:id | GET | Display one specific person|

We will create a view for `/people` and display a form for `POST` requests to create an entry. See `people.ejs` for implementation. 
SQL Query for Index: 
```sql
SELECT * FROM people;
```
SQL Query for selecting a specific person: 
```sql
SELECT * FROM people WHERE ID = value;
```
Javascript implementations
```javascript
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
```

### CREATE
To insert a new record into our database table, we will have to follow these steps: 
1. Ingest the input form
2. Pass the variables into our SQL query
3. Redirect back to `/people` route after `POST` operation 

| Database Operation | Path Name | Path | HTTP Verb | Description | 
| --- | --- | --- | --- | --- |
| CREATE | Create | /people | POST | Create a new person in database |


SQL Query for INSERT:
```sql
INSERT INTO people (field1, field2,...) VALUES (value1, value2,...);
```

```javascript
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
```
### UPDATE and DELETE
HTML forms can only send GET and POST requests. 
In order to send PUT or DELETE requests, we need to use `method override` module. 
```
npm i method-override
```
```javascript
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
```

| Database Operation | Path Name | Path | HTTP Verb | Description | 
| --- | --- | --- | --- | --- |
| UPDATE | Update | /comments/:id | PATCH | Update one specific comment |


| Database Operation | Path Name | Path | HTTP Verb | Description | 
| --- | --- | --- | --- | --- |
| READ | Index | /people | GET | Display all people |
| READ | Show | /people/:id | GET | Display one specific person|

SQL Queries: 
```sql
UPDATE table_name SET param1=value1, param2=value2, ... WHERE param3=valu3; 
DELETE FROM table_name WHERE param1=value1;
```