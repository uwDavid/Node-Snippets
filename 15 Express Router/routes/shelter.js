const express = require('express');
const router = express.Router(); 

router.get('/shelters', (req, res) => {
    res.send('All shelters');
})

router.post('/shelters', (req, res)=>{
    res.send('post to create shelter');
})
router.get('/shelters/:id', (req, res)=> {
    res.send('Shelter details');
})

router.get('/shelters/:id/edit', (req, res)=>{
    res.send('Edit shelter page');
})

module.exports = router;