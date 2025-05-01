import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (valor) => valor.trim() !== "",
  message: "O campo {PATH} não pode ser vazio"
});

mongoose.Schema.Types.Number.set("validate", {
  validator: (valor) => valor !== null && valor !== undefined && valor > 0,
  message: "O campo {PATH} não pode ser vazio"
});