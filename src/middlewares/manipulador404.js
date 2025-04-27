import NaoEcontrado from "../erros/NaoEncontrado.js";

function manipulador404(req, res, next) {
  const erro404 = new NaoEcontrado();
  next(erro404);
}
export default manipulador404;