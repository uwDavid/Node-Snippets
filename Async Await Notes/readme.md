# Callback, Promises, Async
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
Promises improves upon the callback pattern. 
Here, the script 'promises' to do something. If it's successful, then we can call `.then()`, otherwise we can catch the error by calling `.catch()`. 
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

