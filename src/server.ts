
import * as express from 'express';
import * as cors from 'cors';
import {Routes} from './routes/routes';

// const port =  process.env.PORT ||5000; // default port to listen

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// //tests 
// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });


// app.get("/", (req: express.Request, res: express.Response)=> res.send("hello world!"));

// app.use("/api/",  callRoutes);



//
class Server{

    public app: express.Application;
    public port: number;

    constructor(routes, port){
        this.app = express();
        this.port = port;
        this.config();
        this.intializeRoutes(routes);

    };

    private config(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());

    }

    private intializeRoutes(routes){
        routes.forEach(route => {
            this.app.use("/",route.router)
        });
    }

    public listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server is running on port: ${this.port}`);
        })
    }

}


const server = new Server([
    new Routes(),
    ], 5000);

server.listen();
