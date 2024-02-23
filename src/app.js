import express  from 'express';
import {dirname, join}  from 'path';
import { title } from 'process';
import { fileURLToPath } from 'url';/*
import indexroute from './routes/index.js';*/
import { PORT } from './config.js';
//import ejs from ejs

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

app.set('view engine','ejs');
app.set('views', join(__dirname, 'views'));
/*
app.use(indexroute);*/

app.use(express.static(join(__dirname, 'public')));

app.listen(PORT);
console.log('escuchando en el puerto ', PORT);

