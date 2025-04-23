import http from 'http';

const PORT = 3000;

const rotas = {
    "/": "Curso de Express API",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
  };

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(rotas[req.url]);
}
);
// Inicia o servidor na porta 3000
// O servidor escuta requisições na porta 3000
server.listen(PORT, () => {
  console.log('Servidor rodando na porta 3000');
});
