import { Sequelize } from "sequelize-typescript";
import { Product } from "../models/product";
import { Person } from "../models/person";
import { Comedor } from "../models/comedor";

const connection = new Sequelize({
    database: 'sisweb_db',
    dialect: 'mysql',
    username: 'sisweb_user',
    password: 'HDK#$%Ljkwerff.89',
    models: [
        Product,
        Person,
        Comedor
    ]
});

async function connectionDB(){
    try{
        await connection.sync();
    }catch(e){
        console.log(e);
    }
}

export default connectionDB;