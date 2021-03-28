# 03 Routing with Paramters
Express will automatically generate paramters passed by request into req.params. 
We can use this feature to get additional information about the incoming HTTP requests. 

In this example, we will extract the subreddit name based for any request made to `/r/subreddit_name`. 

To process routes to this subreddit route, we will use: 
```javascript
app.get('/r/:subreddit', (req, res)=>{...}) 
```

Then to access this subreddit, we can destructure the req.params object: 
```javascript
const {subreddit} = req.params; 
```
**Note**
>The pattern matching is very specific. Here going to `/r/cats/dogs` will be matched with the wildcard route rather than the subreddit rout. 

We can also have more than one pattern matching: 
```javascript
app.get('/r/:subreddit/:postID', (req, res)=>{...}) 
// Destructuring
const {subreddit, postID} = req.params; 
```
