
import {pool} from '../views/db.js'
 
export const home = (req, res) => res.render('home', {title: 'Home'});
 
export const login = (req, res)=> res.render('login', {title: 'Login'});
 
export const registro = (req, res)=> res.render("registro", {title: 'Registro'});
 /*
export const inserUsers =(req, res)=> async(req,res) =>{

di
    req.body
   
}*/