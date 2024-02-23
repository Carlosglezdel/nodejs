import { Router} from "express";
import { pool } from "../db.js";/*
import {home,login,registro,insertuser} from '././controllers/usuariosController.js';*/

const router = Router();


router.get('/' , (req , res) => res.render('home' , {title:'Home'}));
router.get('/login' , (req , res) => res.render('login', {title:'Login'}));
router.get('/registro' , (req , res) => res.render('registro',{title:'Registro'}));

router.get('/connect', async (req,res)=>
{const  [result] = await pool.query('SELECT 1+1 AS RESULT')
res.json(result[0]);}
);
/*
router.post('/insertuser', insertUsers);
export  default router; */