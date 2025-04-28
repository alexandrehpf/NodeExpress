import { autor } from "../models/index.js";
import NaoEcontrado from "../erros/NaoEncontrado.js";

class AutorController {

  static async listarAutores (req, res, next) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (erro) {
      next(erro);
    }
  };

  static async listarAutorPorId (req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);

      if (autorEncontrado !== null) {
        res.status(200).json(autorEncontrado);
      } else{
        next(new NaoEcontrado("Id do Autor(a) não localizado."));
      }

    } catch (erro) {
      next(erro);
    }
  };

  static async cadastrarAutor (req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Atuor(a) criado com sucesso", livro: novoAutor });
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarAutor (req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findByIdAndUpdate(id, req.body);
      
      if (autorEncontrado !== null) {
        res.status(200).json({ message: "Autor(a) atualizado" });
      } else{
        next(new NaoEcontrado("Id do Autor(a) não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static async excluirAutor (req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findByIdAndDelete(id);
      if (autorEncontrado !== null) {
        res.status(200).json({ message: "Autor(a) excluído com sucesso" });
      } else{
        next(new NaoEcontrado("Id do Autor(a) não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };
};

export default AutorController;