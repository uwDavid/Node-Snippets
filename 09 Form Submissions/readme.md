# 09 Form Submissions
We will demonstrate how we can send data via `GET`/`POST` requests.

## Basic Example
We will set up a HTML template and we can experiment with sending `GET`/`POST` requests to our server.
Our HTML forms will be identical:
```html
<body>
    <h1>Trying out GET/POST</h1>
    <h2>GET Request</h2>
    <form action="http://localhost:8080/data" method="get">
        <input type="text" name="material">
        <input type="number" name="qty">
        <button>Submit</button>
    </form>
    <h2>POST Request</h2>
    <form action="http://localhost:8080/data" method="post">
        <input type="text" name="material">
        <input type="number" name="qty">
        <button>Submit</button>
    </form>
</body>
```

Then we will set up Express to handle both `GET` and `POST` requests to the `/data` route. 
Just doing a very basic `res.send()`. 
```javascript
app.get('/data', (req, res)=>{
   res.send("GET method");
});

app.post('/data', (req, res)=>{
    res.send("POST method");
 });
```

## Passing Request Body
Now let's extract additional information from this form. 
Just like `req.params` and `req.query`, request body is conveniently extracted in `req.body`. 
However, it is by default undefined. 

There are many different formats in which we can send to the server via request body: 
- form data
- text
- json, etc

In order to work with it, we need to first parse it using an approriate middleware for the data type that we are working with. 
More info can be found [here](http://expressjs.com/en/5x/api.html#req.body)

**Step 1:** Enable `express.urlencoded`
```javascript
app.use(express.urlencoded({ extended: true }));
```
Now if we start the server and try the form submissions again. 
We can console log the `req.body` and destructuring is nothing new. 
```javascript
app.post('/data', (req, res)=>{
    console.log(req.body);
    const {material, qty} = req.body; 
    res.send(`Your ${material} has ${qty} in inventory.`);
});
```