import express, { Express } from "express";
import cors from "cors";
import apiRouter from './src/routes';
import connectionDB from './src/connection/connection';

const morgan = require('morgan');

const app: Express = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(apiRouter);

connectionDB();

app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});