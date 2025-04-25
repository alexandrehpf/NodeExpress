import express from 'express';
import livros from './livrosRoutes.js';

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send({ title: "Curso de Node.Js com Express API" }));

    app.use(express.json(), livros);
}

export default routes;