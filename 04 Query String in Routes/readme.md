# Query String in Routes
Query string in route starts with a ? and it usually follows this pattern: 
`/route?parameter_name=query_value`

We can also string together multiple queries using &:
`/route?parameter_name=query_value&parameter2=value2`

## Getting Query Values 
Query values are actually stored in the request object.
Similar to route parameters earlier, we can access query parameters by using the `req.query`. 

In our example here, we will set up a query string after our `/search` route.
`localhost:8080/search?q=pupies`


