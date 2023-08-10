import express, { Request, Response } from "express";
import cors from 'cors';
import routesProducto from "../routes/producto";
import db from "../db/connection";

class Server {
  private app: express.Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.listen();
    this.middlewares();
    this.routes();
    this.dbConnect()
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening port ${this.port}`);
    });
  }

  routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({
        msg: "api working",
      });
    });
    this.app.use("/api/products", routesProducto);
  }

  middlewares() {
    //parsear body

    this.app.use(express.json());
    //cors
    this.app.use(cors())
  }

  async dbConnect() {
    try {
        await db.authenticate();
        console.log('base de datos conectada');
        
    } catch (error) {
        console.log(error);
        console.log('error al conectarse a la db');
        
        
    }
    
  }
}

export default Server;
