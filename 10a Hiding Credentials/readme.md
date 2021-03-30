# 10a Optional - Hiding Credentials
We do not want to expose our usernames, passwords, and API keys to online repositories. 
To hiden these credentials we will make use of `Environment Variables` and the `dotenv` package. 

`Environment Variables` are variables in your system that describes the environment.
We can define variables in our process's run-time environment and use it like a regular variable in our application. 

We use the `dotenv` package to help us automatically load our variables (stored in a `.env` file) into our system. 
We will also add this `.env` file to our `.gitignore` file to avoid loading this to online repositories.

### **Step 1:** Make a `.env` file
To start, make an `.env` file and add it to `.gitignore`. 
In the `.env` file, we can list our credntials / API keys here. 
```
PSQLUSER = xx
PSQLPWD = xxx
```
**!!! Be sure to add this `.env` file to `.gitignore` !!!**

### **Step 2:** Require `dotenv` package
Next, we will use `dotenv` module to help us automatically set environment variables. 
```
$ npm install dotenv
```
To use the `dotenv` package.
```javascript
require('dotenv').config();
```
Since the `.env` file is in my `root` directory, I need to go 1 level up. 
So we modify our script to: 
```javascript
require('dotenv').config({path: path.resolve(__dirname, "../.env")});
```

Then we set up our db connection: 
```javascript
const connectionString = 
    `postgresql://${process.env.PSQLUSER}:${process.env.PSQLPWD}@localhost:5432/test`; 
console.log(connectionString);
const db = pgp(connectionString); 
```
Note that we are using back-ticks here to get the environment variables. 

## Alternative
We can also make a `db` or `config` folder and keep our javascripts there. 
And add this folder to the `gitignore` file. 

Add this entry to our `.gitignore` file: 
```
/db
```

The file structure in this tutorial is good in the sense that I am saving this `db` folder 1 level higher. In `root` folder. 
But each individual lesson's `index.js` file will have to reference to it by using: 
```javascript
const db = require('../db'); 
```
**Note:** This is referencing the folder at 1 level up, and Express automatically looks for an `index.js` file in that folder.

We will just use this simpler approach going forward.