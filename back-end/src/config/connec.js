import connection from "./db.js";

connection.query("SELECT * FROM CadastroUsers", (err, results) => {
  if (err) throw err;
  console.log(results);
});