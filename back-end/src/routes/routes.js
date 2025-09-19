import express from "express";
import controllerCadastro from "../controllers/controller-cadastro.js";
import controllerLogin from "../controllers/controller-login.js";

const routes = express.Router();

routes.get("/cadastro", controllerCadastro.listarUsuarios);
routes.post("/cadastro", controllerCadastro.cadastrarUser);

routes.post("/login", controllerLogin.login);

export default routes;
