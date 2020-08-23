import {Data} from './interfaces/index';

const Express = require('express');

const fs = require("fs");

//testing reading 

// const fs = require("fs"); 
   
// Read users.json file 
fs.readFile("users.json", function(err: any, data:Data) { 
      
    // Check for errors 
    if (err) throw err; 
   
    // Converting to JSON 
    const users = JSON.parse(data); 
      
    console.log(users); // Print users  
}); 
