
import * as express from 'express';
// import * as UTIL from '../util';

export class Routes{
    public router = express.Router();

    public routes(){
        this.router.get("/", this.all );
        this.router.get("/:slug", this.queryByParam);
        this.router.post("/", this.add);
        this.router.put("/", this.update);
        this.router.delete("/", this.delete);

    }
  
    public queryByParam(req: express.Request, res: express.Response){
        const param = req.params;        
        throw new Error("Method not implemented.");
    };

    public update(req: express.Request, res: express.Response){
        throw new Error("Method not implemented.");
    };

    public add (req: express.Request, res: express.Response){
        throw new Error("Method not implemented.");
    };

    public all(req: express.Request, res: express.Response){
        res.json({ message: 'GET /user request received' });
    };

    public delete(req: express.Request, res: express.Response){
        throw new Error("Method not implemented.");

    };

    constructor(){
        this.routes();
    }
};




