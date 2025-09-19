import connection from "../config/db.js"; // conexão mysql

class controllerCadastro {

  static async listarUsuarios(req, res) {
    connection.query("SELECT * FROM CadastroUsers", (err, results) => {
      if (err) {
        res.status(500).json({ message: `${err.message} - falha na requisição` });
        return;
      }
      res.status(200).json(results);
    });
  }

  static async cadastrarUser(req, res) {
    const {username, email, password} = req.body;
    const sql = "INSERT INTO CadastroUsers (username, email, password) VALUES (?, ?, ?)";

    connection.query(sql, [username, email, password], (err, result) => {
      if (err) {
        res.status(500).json({ message: `${err.message} - falha no cadastro` });
        return;
      }
      res.status(200).json({ message: "Usuário cadastrado com sucesso", id: result.insertId });
    });
  }
}

export default controllerCadastro;
