import {Data} from './interfaces/index';

const express = require( "express" );
const cors = require('cors');
const routes = require('./routes/index');

const port = 5000; // default port to listen

// define a route handler for the default home page


class Server {
   
    public app: any;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
        
    }
    public routes() {
        throw new Error("Method not implemented.");
        this.app.get( "/", ( req, res ) => {
            res.send( "Hello world!" );
        } );
        
        // start the Express server
        this.app.listen( port, () => {
            console.log( `server started at http://localhost:${ port }` );
        } );
        
    }
    public config() {
        throw new Error("Method not implemented.");
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

    }
};

