# S2 - Async Await
We need to understand `Promises` before we can learn about `async` functions. 
It is basically a syntactic sugar to resolve promises.

### Async Introduction
We can declare any function as `async`, and this function should always return `promises`. 

These two are equivalent: 
```javascript 
async function msg(){
    return 'Hello there!'; 
}

function msgPromise(){
    return Promise.resolve('Hello, this is a promise'); 
}

// Both methods work with .then()
msg().then( msg => {
    console.log(msg); 
}); 
```

Similarily for errors: 
```javascript
async function oops(){
    throw 'Async error';
}

oops().catch( err => {
    console.log(err);
}); 
```
### Await Introduction
`await` pauses the execution of the `async` function. The function waits for promise to resolve. 

```javascript
async function processData() {
    let data = await getData(); 
    console.log(data); // This code will suspened until we have data
}
```

### Handling Errors 
We handle errors in `async` functions by using `try catch` statements. 

```javascript 
async function processData(){
    try {
        let data = await getData(); 
        console.log(data);
    } catch (err) {
        console.log("Error msg: " + err);
    }
}
```

### Promise.all
In the case where one `await` process does not depend on another one, we should still process them asynchronously. 

This is a bad example, the 2nd `getData()` is waiting for the 1st one to finish. But it didn't need to:
```javascript
async function processData() {
    let data1 = await getData(1); 
    let data2 = await getData(2); 

    console.log(data1); 
    console.log(data2); 
}
```

To let each `getData()` to run asynchronously, we can do this: 
```javascript
async function processData() {
    let data1 = getData(1); 
    let data2 = getData(2); 

    let d1 = await data1;
    let d2 = await data2;

    console.log(data1); 
    console.log(data2); 
}
```

Alternatively, we can use `Promise.all` to resolve: 
```javascript
async function processData() {
    let data = await Promise.all([
        getData(1), 
        getData(2),
    ]); 

    console.log(data[0]); 
    console.log(data[1]); 
}
```