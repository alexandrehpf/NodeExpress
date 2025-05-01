import { autor, livro } from "../models/index.js";
import NaoEcontrado from "../erros/NaoEncontrado.js";


class LivroController { 
  static async listarLivros(req, res, next) {
    try {
      const buscaLivros = livro.find();
      req.resultado = buscaLivros;
      next();
    } catch (error) {
      next(error);
    }
  }

  static async listarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      if (livroEncontrado !== null) {
        res.status(200).json(livroEncontrado);
      } else{
        next(new NaoEcontrado("Id do Livro não localizado."));
      }

    } catch (error) {
      next(error);
    }
  }

  static async cadastrarLivro(req, res, next) { 
    const novoLivro = req.body;
    try {
      const autorEncontrado =  await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: {...autorEncontrado._doc} };
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json ({ message: "Livro cadastrado com sucesso", livro: livroCriado });
    }catch (error) {
      next(error);
    }
  }

  static async atualizarLivro(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findByIdAndUpdate(id, req.body);
      
      if (livroEncontrado !== null) {
        res.status(200).json({ message: "Livro atualizado com sucesso" });
      } else{
        next(new NaoEcontrado("Id do Livro não localizado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async deletarLivro(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findByIdAndDelete(id);

      if (livroEncontrado !== null) {
        res.status(200).json({ message: "Livro excluído com sucesso" });
      } else{
        next(new NaoEcontrado("Id do Livro não localizado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async listarLivrosPorFiltro(req, res, next) {
    try {
     
      const busca = await processaBusca(req.query);

      if (busca !== null) {
        const livrosResultado = livro
          .find(busca);
        req.resultado = livrosResultado;
        next();
      } else{
        res.status(200).send([]);
      }


    } catch (error) {
      next(error);
    }
  }
};

async function processaBusca(parametros) { 

  const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros;
  let busca = {};

  if (editora) busca.editora = { $regex: editora, $options: "i" };
  if (titulo) busca.titulo = { $regex: titulo, $options: "i" };
  if(minPaginas || maxPaginas) busca.numeroPaginas = {};

  // $gte = Greater than or equal = Maior ou igual
  if(minPaginas) busca.numeroPaginas.$gte = minPaginas;
  // $lte = Less than or equal = Menor ou igual
  if(maxPaginas) busca.numeroPaginas.$lte = maxPaginas;

  // console.log(nomeAutor);
  

  if (nomeAutor) {

    const autorEncontrado = await autor.findOne({ nome: { $regex: nomeAutor, $options: "i" } });
    if (autorEncontrado !== null) {
      //Mas para buscar por campos dentro de objetos embutidos no MongoDB, você precisa usar notação de caminho (dot notation), como:
      busca["autor.nome"] = { $regex: nomeAutor, $options: "i" };
    } else {
      busca = null;
    }
  }

  return busca;
}

export default LivroController;