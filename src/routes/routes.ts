const express = require('express');
const fs = require('fs');
const router = express.Router();

import * as UTIL from '../util';


export const PostRoutes = () =>{



router.get("/test", (req, res) => res.json({ msg: "This is the test route" }));

//get all 
router.get('/', (req, res)=> {
    UTIL.read
    .then(res => res.json());

});

//get by some param

router.get("/", (req, res) =>{
    let query = req.body.params;
    UTIL.read(query)
    .then(res => res.send());
    
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

};





module.exports = router;
