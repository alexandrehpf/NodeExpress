// import http from 'http';
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

// Inicia o servidor na porta 3000
// O servidor escuta requisições na porta 3000
app.listen(PORT, () => {
  console.log("Servidor rodando na porta 3000");
});
