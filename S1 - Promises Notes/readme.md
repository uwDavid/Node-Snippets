# S1 - Callbacks and Promises
Callbacks, Promises, and Async/Await functions are very vitual functions in javascript. 
Here is some notes/snippets to help us understand these concepts. 

### Callbacks
First we start with callbacks. 
Say we started with functions that change the color of our HTML page, and we want to transition from one color to the next in order. 
We can achieve this by using callbacks. Essentially nesting the next function inside the current function: 
```javascript
setTimeout(()=>{
    document.body.style.backgroundColor = 'red';
    setTimeout(()=>{
        document.body.style.backgroundColor = 'orange';
        setTimeout(()=>{
            document.body.style.backgroundColor = 'red';
        },1000)
    }, 1000)
}, 1000); 
```
We organize the code into callback format: 
```javascript
const delayedColor = (newColor, delay, doNext) =>{
    setTimeout(()=>{
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay); 
}

delayedColor('red', 1000, ()=>{
    delayedColor('orange', 1000, ); 
}); 
```

### Promises
Promises improves upon the callback pattern. The analogy for it is very similar to a real-life promise. 
1. You promise to do something
2. In the future it can either be a) done, or b) fail to live up to promise

The syntax for a `Promise` object: 
```javascript
let p = new Promise((resolve, reject)=>{
    // executor code
}); 
```
The function passed to the promise `(resolve, reject)=>{}` is called the executor. 
The arguments `resolve` and `reject` are callbacks. 
When the executor runs and obtains the result, it will call one of these callbacks: 
1. `resolve(value)` - if the job finished successfully
2. `reject(err)` - if an error occurred
** Note: ** `resolve()` and `reject()` are pre-defined functions in the JavaScript engine. 

Psuedo-code for a promise: 
let p = new Promise((resolve, reject) => {
    if successful then call `resolve()` with resulting values passed in
    else call `reject()` with an error object
}

We define error object like so: 
```javascript
new Error("error message");
// Using reject
reject(new Error("oops");)
```
** Note: ** There can only be 1 `resolve()` and `reject()` in a promise. 

### Consumers of Promises: then, catch, finally
To use the results from a promise, we just need to chain `.then()` and `.catch()`to a promise. 
If the promise is successful, then we can call `.then()`, otherwise we can catch the error by calling `.catch()

```javascript
let p = new Promise((resolve, reject)=>{
    // executor code
}); 

p.then(
    ()=> {console.log('Success');}
).catch(
    () => {console.log('Error occurred');}
)
```

We use `.finally()` to always run some code. 
It isn't meant to process the result of a promise, but rather passes it through to `then()` and `catch()`.


Here, the script 'promises' to do something. `. 
```javascript
colorPromise('red', 1000)
.then(()=>{
    return colorPromise('orange', 1000);
})
.then(()=>{
    return colorPromise('teal', 1000);
})
.catch((err)=>{
    console.log('error message:'+err);
}); 
```


