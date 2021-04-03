# 13 Handling Errors
Express has a default error handling, for more details check the [error handling section](https://expressjs.com/en/guide/error-handling.html). 

We can trigger Express's default error handling by: 
```javascript 
app.get('/error', (req, res)=>{
    unknown.someMethod(); 
}); 
```
Or, we can throw a custom error by doing: 
```javascript
app.get('/custom', (req, res)=>{
    throw new Error('Error message');
})
```

### Error Basics
Error handler signature requires `(err, req, res, next)`, this is a custom error handler: 
```javascript
app.use((err, req, res, next)=>{
    console.log("**** Error Occured ****"); 
    console.log(err); 
    res.status(500).send('Error occurred!');  // Send back http response
})
```
Now if we go to the `/error` route, we can see this message printed to console.
From here, if we call `next()` it will call the next middleware. 
To call another error handler, we need to pass in the error to `next()` like so `next(err)`. 

```javascript
app.use((err, req, res, next)=>{
    console.log("**** Error Occured ****"); 
    res.status(500).send('Error occurred!');  // Send back http response
    next(); // Calls the next middleware
    next(err); // If we pass in the error into next(), it will be calling the error handler

})
```
### Defining Custom Error Handler
When an error occurs we want to: 
1. Respond with an error code
2. Respond with an error message
But right now, our app does not have any status codes attached to the errors. 
We can make a custom error handler that takes the `status code` and `error message`. 
```javascript
class AppError extends Error {
    constructor(message, status){
        super(); 
        this.message = message;
        this.status = status; 
    }
}
```

We can then use this custom error handler by including this in our `index.js`: 
```javascript
app.use((err, req, res, next)=>{
    const {status = 500, message = 'default error message'} = err; 
    res.status(status).send(message); 
})
```
**Note: ** This has to be included near the end of the `index.js` file.

### Handling Async Errors
For asynchronous functions, we need to pass our `error` into the `next()` function like so: 
```javascript
app.get('/asyncError, async (req, res, next)=>{
    next(new AppError('custom error', 404)); 
}); 
```
