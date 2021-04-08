# 10 Using MongoDB
Although MongoDB outputs records in a JSON format, it actually stores it in a BSON format.
It compresses the JSON content into binaries so that it saves space. 

Check if we have MongoDB installed by typing: 
```
$ mongo
```
Once inside MongoDB REPL, here are some useful commands. 

| Mongo Commands | Description | 
| --- | --- |
| ctrl+c | quit REPL |
| show dbs | show all databases |
| use database_name | connect to a database, if not available create database |

**Note: ** Instead of databases, Mongo saves data into `Collections`. 

### CREATE
| CRUD | Mongo Commands | Description | 
| --- | --- | --- |
| CREATE | db.collection_name.insert(array or {json object}) | Insert record(s) to collection |
| CREATE | db.collection_name.insertOne({json object}) | Insert 1 record to collection | 
| CREATE | db.collection_name.insertMany({array of json) | Insert records to collection | 

### READ 
| CRUD | Mongo Commands | Description | 
| --- | --- | --- |
| READ | db.collection_name.find() | Show all records in collection | 
| READ | db.collection_name.find(arry or json) | Show all matching records in collection  | 
| READ | db.collection_name.findOne({name: "aName"}) | Show one matching record in collection | 
| READ | db.collection_name.findMany({name: "aName"}) | Show all matching records in collection  | 
**Note: ** find() returns a cursor to the results, for us to iterate through. 

### UPDATE 
| CRUD | Mongo Commands | Description | 
| --- | --- | --- |
| UPDATE | db.collection_name.updateOne(<filter>, <update>, <options>) |  Update first record in collection | 
| UPDATE | db.collection_name.updateMany(<filter>, <update>, <options>) | Update all matching records in collection  | 
| UPDATE | db.collection_name.replaceOne(<filter>, <update>, <options>) | Show all matching records in collection  | 

For `<update>` we must use a Mongo operator:
```
db.exampleCollection.updateOne({name: 'Abby'}, {$set: {age: 4}})
```
But to modify date, we have to use: 
```
db.exampleCollection.updateOne(
    {item : 'pencil'}, 
    {$currentDate: { lastModified: true}}
)
```

### DELETE
| CRUD | Mongo Commands | Description | 
| --- | --- | --- |
| DELETE | db.collection_name.deleteOne(<filter>) | Show one records in collection | 
| DELETE | db.collection_name.deleteMany(<filter>) | Show all matching records in collection  | 

### Other Operators 
To access nested properties: 
```
db.exampleCollection.find({'personality.likeIceCream': true})