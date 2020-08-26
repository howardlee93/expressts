

import * as express from 'express';


import * as UTIL from '../util';


export class PostRoutes{
    public router;

    public queryByParam(req: express.Request, res: express.Response){
        const param = req.params;

    };

    public update(req: express.Request, res: express.Response){


    };

    public add (req: express.Request, res: express.Response){

    };

    public all(req: express.Request, res: express.Response){
        const data = UTIL.read();
        return res.status(200).json({ data, message: 'success' });

    };

    public delete(req: express.Request, res: express.Response){

    };



    public routes(){
        this.router.get("/");
        this.router.get("/");
        this.router.post("/");
        this.router.post("/");
        this.router.delete("/");
    };

    constructor(){
        this.router = express.Router();
        this.routes();

    };

}

