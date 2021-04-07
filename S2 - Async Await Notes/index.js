// Creating Promise
/*
let p = new Promise((resolve, reject)=>{
    let result = true;
    if(result){
        resolve('Resolved message');
    } else {
        reject('Rejected message'); 
    }
}); 

// Using promise 
p
.then((message)=>{
    console.log('After p runs... Message from p was: ' + message);
})
.catch((message)=>{
    console.log('P.catch, error message: ' + message); 
}); 
*/

// Callback function refactoring
const opt1 = false; //change these
const opt2 = false;

function uglyCallback(callback, errCallback){
    if(opt1){
        errCallback({
            name: 'callback err 1', 
            message: 'Error msg: option 1 failed'
        }); 
    } else if(opt2){
        errCallback({
            name: 'callback err 2', 
            message: 'Error msg: option 2 failed'
        }); 
    } else {
        callback('Successful callback!'); 
    }
}

uglyCallback(
    (message)=>{ console.log('Success: '+ message);}, 
    (error) => { console.log(error.name + ' ' + error.message);}
); 

function refPromise(){
    return new Promise((resolve, reject)=>{
        if(opt1){
            reject({
                name: 'promise err 1', 
                message: 'Error msg: option 1 failed'
            }); 
        } else if(opt2){
            reject({
                name: 'promise err2', 
                message: 'Error msg: option 2 failed'
            }); 
        } else {
            resolve('Successful promise!'); 
        }
    });
}

refPromise()
.then((message)=>{ console.log(message)})
.catch((error)=>{ console.log(error.name + ' ' + error.message);}); 

// Using Async and Await
function makeRequest(location){
    return new Promise((resolve, reject)=>{
        console.log('Making request to ' + location); 
        if(location==='Nevada'){
            resolve('Vegas baby!');
        } else {
            reject('Going somewhere...');
        }
    }); 
}

function afterRequest(response){
    return new Promise((resolve, reject)=>{
        console.log('After making request...'); 
        resolve('Info after request' + response); 
    }); 
}

// makeRequest('India')
// .then( response => {
//     console.log('Request successful, now processing afterRequest'); 
//     return afterRequest(response); // We must return this request
// })
// .then( processedRes => {
//     console.log(processedRes); 
// })
// .catch(err => {
//     console.log(err); 
// })

async function refAsync(){
    try {
        const response = await makeRequest('India'); 
        console.log("Async response received"); 
        const afterRes = await afterRequest(response); 
        console.log(afterRes); 
    } catch(err) {
        console.log(err); 
    } 
}

refAsync();