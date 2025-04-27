import ErroBase from "./ErroBase.js";

class NaoEcontrado extends ErroBase {
  constructor(mensagem = "Página não encontrada") {
    super(mensagem, 404);
  }
}
export default NaoEcontrado;