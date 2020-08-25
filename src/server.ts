import {Data} from './interfaces/index';

// import * as Express from 'express';
// import cors from 'cors';
const express = require('express');

const cors = require('cors');

const routes = require('./routes/routes');

const port = 5000; // default port to listen

// define a route hander for the default home page

class Server {
   
    public app //= Express.application;
    
s
    constructor(){
        this.app = express();
        this.config();
        this.routes();
        
    };

    public routes() {
        throw new Error("Method not implemented.");
        this.app.get( "/", ( req, res ) => {
            res.send( "Hello world!" );
        } );
        
        // start the Express server
        this.app.listen( 5000, () => {
            console.log( `server started at http://localhost:${ port }` );
        } );
        
    };

    public config() {
        throw new Error("Method not implemented.");
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

    }
};


// Server.start();

