const express = require('express');
const router = express.Router(); 

router.use((req,res,next)=>{
    console.log("entering dogs routes");
    next();
})
router.get('/', (req, res) => {
    res.send('All dogs');
})

router.post('/', (req, res)=>{
    res.send('post to create dogs');
})
router.get('/:id', (req, res)=> {
    res.send('Dog details');
})

router.get('/:id/edit', (req, res)=>{
    res.send('Edit dog page');
})

module.exports = router;