import { config } from 'dotenv'

config();


const db_config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}
console.log(process.env.USER); // Imprime "cinthia"


const express_config = {
    port: process.env.PORT,
    host: process.env.HOST,
}


export {db_config, express_config}

