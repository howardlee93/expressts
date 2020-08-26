
import * as express from 'express';
import cors from 'cors';
import {PostRoutes} from './routes/routes';

const port = 5000; // default port to listen




// define a route hander for the default home page

class Server {
   
    public app: express.application;

    constructor(app: express.application){
        this.app = express();
        this.config();
        this.routes();
        
    };

    public routes() : void {
        throw new Error("Method not implemented.");
        this.app.get( "/", ( req, res ) => {
            res.send( "Hello world!" );
        } );
        
        // start the Express server
        this.app.listen( 5000, () => {
            console.log( `server started at http://localhost:${ port }` );
        } );
        
    };

    public config() :void {
        throw new Error("Method not implemented.");
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

    }
};


export default new Server().app;



// Server.start();

