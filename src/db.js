import {createPool} from 'mysql2/promise'
import { DB_host, DB_name,DB_password,DB_port,DB_user } from "./config.js";
 
export const pool = createPool ({
    host: DB_host,
    user: DB_user,
    password: DB_password,
    database: DB_name,
    port: DB_port
})