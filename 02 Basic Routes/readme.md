#02 Basic Routes
We can use app.get() to send specific responses back to the client based on the route they are visiting. 
This is a very simple demo to have 3 different routes: 
1. '/' - this is our homepage
2. '/cats' - responding with "Kitties!"
3. '/dogs' - responding with "Puppies!"
4. '*' - a wildcard route, for all other routes

<p class="callout info">It is important to note that we can only send one response back to the client using res.send()</p> 
<p class="callout info">Order of route responses also matters because we can only send one response back. In this case, we need to put the wildcard route at the very bottom.</p> 