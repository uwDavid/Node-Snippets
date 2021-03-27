# 00 Getting Started
We need to install Node to get started. 
Visit the official website https://nodejs.org to get the latest LTS version. 

Check to see if you have node installed by typing: 
```
$ node -v
```

# To start an Web App
Step 1: Initiate npm project, it creates a package.json file in the application 
```
$ npm init
```
Step 2: Install Express in current directory and save it to the dependency list in package.json file. 
```
$ npm install express --save
``` 
Step 3: Install nodemon, it is a tool that restarts our server as soon as we make any changes
```
$ npm install nodemon -g
```

# Basic file structure
In our app entry point index.js this will be our template.
```javascript
var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);
```
To start the server we type: 
```
$ node index.js
```
Then we can visit localhost://3000 to see that our server is now working. 

# Express Methods
```javascript
app.get(route, callback)
```
When a GET request at the given route is called invoke the callback function. 
Call back function has 2 parameters req (request) and res (response). 
The req parameter is a HTTP request object and contains all the HTTP request headers, bodies, etc.
Similarly, res parameter is the HTTP response object. 

```javascript
res.send()
```
This function takes an object as input and send this to the client.

```javascript
app.list(port, [host], [backlog], [callback])
```
This function binds and listens for connections on specified host and port. 
port = port number to accept incoming requests
host = name of the domain
backlog = max number of queued pending connections, default is 511
callback = callback function for when server starts listening