
import * as express from 'express';
import * as cors from 'cors';
import {PostRoutes} from './routes/routes';

const port =  process.env.PORT ||5000; // default port to listen

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//tests 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


app.get("/", (req: express.Request, res: express.Response)=> res.send("hello world!"));

app.use("/api", PostRoutes);
