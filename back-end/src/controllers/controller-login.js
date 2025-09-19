import  connection  from "../config/db.js";

class controllerLogin {

  static login(req, res) {
    const { username, password } = req.body;

    const sql = "SELECT * FROM CadastroUsers WHERE username = ? AND password = ?";
    connection.query(sql, [username, password], (err, results) => {
      if (err) {
        res.status(500).json({ message: "Erro no login", error: err });
        return;
      }

      if (results.length > 0) {
        res.status(200).json({ message: "Login realizado com sucesso!" });
      } else {
        res.status(401).json({ message: "Usuário ou senha inválidos" });
      }
    });
  }

}

export default controllerLogin;
