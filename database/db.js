import {mongoose} from 'mongoose';
import {db_config} from '../config.js'

// ${db_config.database}?retryWrites=true&w=majority&appName=Cluster0`;
const URI = `mongodb+srv://${db_config.user}:${db_config.password}@cluster0.86no8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


export async function connect() {
    try{
        await mongoose.connect(URI);
        console.log("DB MongoDB Conectada correctamente - ")
    }catch (error){
        console.log(error);
        process.exit(1);
    }
}

// connect();