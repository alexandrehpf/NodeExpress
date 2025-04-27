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
    type: Number },
  numeroPaginas: { 
    type: Number, min: [10, "O número de páginas deve estár entre 10 e 5000. Valor fornecido {VALUE}"], max: [5000, "O número de páginas deve estár entre 10 e 5000. Valor fornecido {VALUE}"] },
  autor: autorSchema
}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;