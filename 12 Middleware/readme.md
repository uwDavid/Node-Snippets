# 12 Middleware
Middleware is the script that runs between receiving client's request and the server sending out the response. 
In Express, the essence of middleware is in `app.use()`. The app will run whatever function is provided to `app.use()` for every request. 
We have already seen an example of this when we set our view template to `EJS`. 

For detailed documentation from Express [here](https://expressjs.com/en/guide/using-middleware.html).

This is a common pattern for middlware: 
```javascript
app.use((req, res, next)=>{
    console.log("This is a middleware.");
    next(); 
})
```
Now ever request to the server will print "This is a middleware" on our console. 
Note that we have to call `next()`, otherwise, the app will be stuck. 

We can also specify a route path for our middleware: 
```javascript
app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
```
