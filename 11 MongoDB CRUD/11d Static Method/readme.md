# 11e - Static Method 
Method applies to the model class instead of just an instance. 

```javascript
productSchema.statics.fireSale = function () {
    return this.updateMany({}, {onSale:true, price:0})
}

Product.fireSale().then(res => console.log(res));
```
Updates all instances to have price of 0. 
