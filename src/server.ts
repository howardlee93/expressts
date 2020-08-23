import {Data} from './interfaces/index';

const express = require( "express" );
const app = express();
const port = 5000; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

const fs = require("fs");

//testing reading 

// const fs = require("fs"); 
   
// Read users.json file 
// fs.readFile("data.json", function(err, data) { 
      
//     // Check for errors 
//     if (err) throw err; 
   
//     // Converting to JSON 
//     const users = JSON.parse(data); 
      
//     console.log(users); // Print users  
// }); 
