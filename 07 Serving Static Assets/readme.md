# 07 Serving Static Assets
When we serve a HTML, we often import other javascript, css, and images from local folder. 
We can do this by using `app.use(express.static('public'))`. 
Now we can include in our css as usual on our HTML: 
```html
<head>
    <link rel="stylesheet" href="/home.css">
</head>
```

We can take it further to provide absolute pathing by using `path`. 
```javascript
// the / is optional
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.static(path.join(__dirname, '/public')));
// Similarly both of these work: 
app.set('views', path.join(__dirname,'views')); 
app.set('views', path.join(__dirname,'/views')); 
```

**Note:** We can have sub-folders under public such as: css, js, img. 
We just need to update our href accordingly: 
```html
<head>
    <link rel="stylesheet" href="/css/home.css">
    <script src="/js/myScripts.js></script>
</head>
```


