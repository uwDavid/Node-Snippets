# 06 Working with EJS
EJS uses `tags` to indicate where we require template to be dynamically controlled by our script. 
Check out the tag documentation [here](https://ejs.co/#docs). 

Two most used tags are `<% %>` the for control flow scripts and `<%= %>` to output values of the script. 

### Simple Example
Remember that res.render() takes 2 additional parameters. 
Let's see how we can use the `local` varible and render it to our template. 

```javascript
const num = 3.14159; 
res.render('numbers', {rand:num})
```
Here `num` variable is made available to the `'numbers.ejs'` template under the name `rand`. 

We update our EJS template to ingest this `rand` local variable. 
```html
<body>
    <h1>PI is: <%= rand %></h1>
</body>
```
### Params/Query String Example
Now that we can pass in variables into our template, let's extract our `req.params` and `req.query` and pass them into our EJS template. 
```javascript
app.get('/r/:subreddit', (req, res)=>{
    const {subreddit} = req.params; 
    const {q} = req.query; 
    res.render("subreddit", {subreddit, q});
});
```

Then in our EJS Template we can have conditionals and loops by using the `<% %>` tag to execute javascripts. 
```html
<body>
    <h1>Welcome to the <%= subreddit%> Subreddit!</h1>
    <% if(q){ %>
        <p>Search query is: <%= q %></p>
    <% } %>
</body>
```

### Loop Example 
This is just to demonstrate how we can have loops inside our EJS template. 
First we have declare an object: 
```javascript
app.get('/all', (req, res)=>{
    const allDogs = ['Crusty', 'Bart', 'Murph', 'Simon' ]; 
    res.render("lists", {allDogs});
});
```

Then we set up loops in our EJS template: 
```html
<body>
    <ul>
        <% for(let dog of allDogs){ %>
            <li> <%= dog %></li>
        <% } %>
    </ul>
</body>
```