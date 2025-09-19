import express from "express";
import routes from "./routes/routes.js";

const app = express();
app.use(express.json());

// Registrar rotas
app.use(routes);

// Subir servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

export default app;