# 10 Connecting to PSQL
To connect to PostgresSQL we will have to use a driver `pg-promise`. 
Visit the full documentation [here](https://github.com/vitaly-t/pg-promise). 
For other drivers, visit Express's official documentation [here](https://expressjs.com/en/guide/database-integration.html). 

### **Step 1:** Install `pg-promise`
```
$ npm install pg-promise
```

### **Step 2:** Require package in app
```javascript
var db = pgp('postgres://username:password@host:port/database')
```
Although we are just hard-coding it here. We should be more concious about protecting our credentials. 

### Optional: Hiding Keys
To start, make an `.env` file and add it to `.gitignore`. 
In the `.env` file, we can list our credntials / API keys here. 
```
PSQLUSER = xx
PSQLPWD = xxx
```
We will use `dotenv` module to help us automatically set environment variables. 
```
$ npm install dotenv
```
Then in our `config.js` we can call this function to set our envrionment variables. 
```javascript
require('dotenv').config();
```
**!!! Be sure to add this `.env` file to `.gitignore` !!!**

