# 05 Templating
There are many templating languages available for Express: 
- EJS
- Handlebars 
- Pug

We will use EJS in our example. Here's how to set it up:
### Step 1: Install EJS
`$ npm i ejs`

### Step 2: Set up Express to use EJS
We use app.set() method to set the `view engine` property to `ejs`. 
`app.set('view engine', 'ejs');`
>**Note:** Express will automatically require the EJS package. 

### Step 3: Set up 'views' folder
Express automatically assumes that the templates will be placed into a 'views' folder in the current directory. 
In other words, the default directory will be `process.cwd() + /views`. 

We can also change it using the app.set() method and set the `views` property. 
To use app.set() default is: 
```javascript
const path = require('path');
app.set('views', path.join(__dirname,'/views'));
```
We can use this to change the `views` folder name or to change the directory. Checkout the `path` module for NodeJS for more info.

### Step 4: Set up a template
The template has a .ejs extension. 

### Step 5: Render template
Instead of res.send(), we can use res.render() to render our ejs template. 
`res.render('home.ejs')`
Although the .ejs here is not required. 
**Note:** res.render() has 2 optional parameters: [locals] and [callback]. 
Locals is used to contain our local variables while callback usually used for error checking.

