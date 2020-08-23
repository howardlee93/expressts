import {Data} from './interfaces/index';

const express = require( "express" );
const cors = require('cors');
const app = express();
const routes = require('./routes/index');

const port = 5000; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("api", routes);


//testing reading 


const fs = require("fs");

// Read users.json file 
// fs.readFile("data.json", function(err: any, data: string) { 
      
//     // Check for errors 
//     if (err) throw err; 
   
//     // Converting to JSON 
//     const users = JSON.parse(data); 
      
//     console.log(users); // Print users  
// }); 
