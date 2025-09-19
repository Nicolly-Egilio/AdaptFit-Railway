import express from "express";
import routes from "./routes/routes.js";

const app = express();
app.use(express.json());

// Registrar rotas
app.use(routes);

export default app;