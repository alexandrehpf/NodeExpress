import mongoose from "mongoose";

async function conectaNaDatabase(){
    // não subir o arquivo com a senha do banco de dados
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};

export default conectaNaDatabase;


