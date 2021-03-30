# 11 REST and CRUD
REST is a way to organize your website and expose database CRUD operations. 
There are many ways to achieve RESTful representation this is only an example. 

| Database Operation | Path Name | Path | HTTP Verb | Description | 
| --- | --- | --- | --- | --- |
| READ | Index | /comments | GET | Display all comments |
| READ | Show | /comments/:id | GET | Display one specific comment |
| CREATE | Create | /comments | POST | Create a new comment in database |
| UPDATE | Update | /comments/:id | PATCH | Update one specific comment |
| DELETE | Destory | /comments/:id | DELETE | Delete one specific comment |
| OTHER | New | /comments/new | GET | Display form to create new comment |
| OTHER | Edit | /comments/:id/edit | GET | Display form to edit a specific comment |

## Connecting to PS