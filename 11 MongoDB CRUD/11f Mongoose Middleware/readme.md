# 11 Mongoose Middleware
We can also define operations before/after database operations. 

```javascript
personSchema.pre('save', async function(){
    console.log("About to save!!")
})

personSchema.post('save', async function (){
    console.log("Saved")
})
```
