
# 📦 NodeExpress API

Uma API RESTful desenvolvida com **Node.js**, **Express** e **MongoDB Atlas**, ideal para servir de base para aplicações web, mobile ou microserviços.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📁 Estrutura do Projeto

```
NodeExpress/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
├── .env.example
├── package.json
└── README.md
```

---

## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/alexandrehpf/NodeExpress.git
cd NodeExpress
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente

Crie um arquivo `.env` na raiz do projeto para configurar o acesso ao banco de dados. 

```env

```

> 🔐 Dica: Nunca suba suas credenciais no GitHub. O `.env` está no `.gitignore`.

### 4. Execute a aplicação

```bash
npm start
```

A API estará disponível em `http://localhost:3000`.

---

## 📬 Rotas Disponíveis

Você pode testar as rotas com o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

Exemplos de endpoints (dependendo dos modelos que você criou):

- `GET /items` – Lista todos os registros
- `GET /items/:id` – Retorna um item específico
- `POST /items` – Cria um novo item
- `PUT /items/:id` – Atualiza um item
- `DELETE /items/:id` – Remove um item

---


## 👨‍💻 Autor

Desenvolvido por **Alexandre Ferraz**  
🔗 [LinkedIn](https://www.linkedin.com/in/alexandre-ferraz-23549526/)
