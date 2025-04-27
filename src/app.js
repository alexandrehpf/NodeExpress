import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("Erro de conexão: " + erro);
});

conexao.once("open", () => {
  console.log("Conexão com o banco de dados feita com sucesso!");
});

const app = express();
routes(app);
 
app.use(manipuladorDeErros);

export default app;

