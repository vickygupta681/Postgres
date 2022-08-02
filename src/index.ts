require('dotenv').config();
import "reflect-metadata";
import express from "express";
import { Request, Response } from "express"
import { AppDataSource } from "../data-source"
import * as path from "path";
import * as bodyParser from "body-parser"
import { set } from "./routes/routes"


const app = express();
app.use(bodyParser.json())
app.use(express.json())

app.use(express.static(path.join(__dirname, "public")));


set(app);


AppDataSource.initialize().then(async () => {

    // start express server
    app.listen(process.env.PORT, () => console.log(`server listening at http://localhost:${process.env.PORT}`))

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log("error------",error))
