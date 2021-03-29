# 08 Partials
Partials are useful for when we want to have the same 'component' to show up in multiple templates. 
For example, all pages should have a navbar on top of the page. 

This is where partials come in. 
**Step 1:** Cut out the partial section and make it an independent `.ejs` file. 
We can store it in a separate `partials` folder under the `views` folder.

**Step 2:** To use partial we just created:`<%- include('partials/head')%>`. 
Note: we have to use `<%-` to import the unescaped code. 

