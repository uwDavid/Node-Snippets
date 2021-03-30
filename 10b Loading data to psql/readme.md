# 10b Loading data to psql
This is similar to [Lesson 17 on my Go Web Dev Examples](https://github.com/PurpleUltralisk/GoWebDevExamples/tree/main/17%20Connecting%20to%20PSQL).

Here's a very helpful guide to working with SQL in Windows: [link](https://www.microfocus.com/documentation/idol/IDOL_12_0/MediaServer/Guides/html/English/Content/Getting_Started/Configure/_TRN_Set_up_PostgreSQL.htm)

To start psql: 
```shell
psql -U postgres
```
Create a database: 
```sql
CREATE DATABASE test;
```
Create a user: 
```sql
CREATE USER tester WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE test TO tester;
```
List users: 
```sql
\du
```
To connect to database use /c in sql: 
```sql
\c test
```
### Generate Dummy Data
You can just copy and paste in prewritten commands. 
Or, you can write your SQL commands in a `.sql` file and run the file using this:  
```sql
\i path\person.sql
```
