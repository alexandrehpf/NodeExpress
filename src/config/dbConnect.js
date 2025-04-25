import mongoose from "mongoose";

async function conectaNaDatabase(){
    // não subir o arquivo com a senha do banco de dados
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};

export default conectaNaDatabase;

// Criar o arquivo .env na raiz do projeto com a seguinte variável de ambiente:
//DB_CONNECTION_STRING=mongodb+srv://<usuario>:<senha>@c<host>/<banco>?retryWrites=true&w=majority&appName=Cluster0
