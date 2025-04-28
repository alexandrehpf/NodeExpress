import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { 
    type: String, 
    required: [true, "O título do livro é obrigatório"] },
  editora: { 
    type: String,
    required: [true, "A editora do livro é obrigatória"],
    enum: {
      values: ["Casa do código", "Alura", "Ficção"],
      mensage: "A editora {VALUE} não é valida"
    } 
  },
  preco: { 
    type: Number 
  },
  numeroPaginas: {
    type: Number,
    // Validação de número de páginas de maneira personalizada
    validate: {
      validator: (valor) => {
        return valor >= 10 && valor <= 5000;
      },
      message: "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"
    }
  },
  autor: autorSchema
}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export { livro };