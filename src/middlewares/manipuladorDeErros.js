import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {
  if(erro instanceof mongoose.CastError) {
    res.status(400).json({ message: "Um ou mais dados fornecidos estão incorretos." });
  } else if(erro instanceof mongoose.Error.ValidationError) {
    const mensagensErros = Object.values(erro.errors).map((erro) => erro.message).join("; ");
    res.status(404).json({ message: `Os seguintes erros foram encontrados: ${mensagensErros}` });
  } else if(erro instanceof TypeError) {
    res.status(404).json({ message: "Autor não encontrado." });
  } else{
    console.log(erro);
    res.status(500).json({ message: "Erro interno no servidor"});
  }
};

export default manipuladorDeErros;