const express = require('express');
const fs = require('fs');
const router = express.Router();

import * as UTIL from '../util';

router.get("/test", (req, res) => res.json({ msg: "This is the test route" }));

//get all 
router.get('/', (req, res)=> {
    UTIL.read
    .then(res => res.json(res));

});

//get by some param

router.get("/", (req, res) =>{
    req.body.params
});


//update 
router.post("/", (req, res)=>{
    req.body.params;

}) 

//adds
router.post("/", (req, res)=>{

    
});


router.delete("/", (req, res)=>{

});



module.exports = router;
