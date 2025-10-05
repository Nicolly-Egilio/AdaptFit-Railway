import app from "./src/app.js";

// const PORT = 3000;

// app.listen(PORT, () => {
//    console.log(`Servidor escutando em http://localhost:${PORT}`);
//});

const express = require('express');
const mysql = require('mysql2');
const path = require('path');

app.use(express.static(path.join(__dirname, "public")));

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos (seu frontend)
app.use(express.static(path.join(__dirname, 'public'))); 
// coloque seus arquivos HTML, CSS, JS dentro da pasta "public"

// Rotas de API (exemplo cadastro)
app.post('/cadastro', (req, res) => {
  const { username, email, password } = req.body;

  db.query(
    'INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)',
    [username, email, password],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Erro ao cadastrar usuário');
      }
      res.send('Usuário cadastrado com sucesso!');
    }
  );
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
