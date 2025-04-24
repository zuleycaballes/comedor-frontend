import express, { Express } from "express";
import cors from "cors";
import apiRouter from './src/routes';
import connectionDB from './src/connection/connection';
import path from "path";

const morgan = require('morgan');

const app: Express = express();
const port = 3000;

// Configurar archivos estáticos
app.use(express.static(path.resolve(__dirname, "public")));
app.use('/uploads', express.static('uploads'));

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Usar las rutas de la API
app.use('/api', apiRouter); // Prefijo para las rutas de la API

connectionDB();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});