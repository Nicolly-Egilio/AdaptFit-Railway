// import mysql from "mysql2";

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",       
//   password: "",       
//   database: "Adapt-Fit" 
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("Erro ao conectar ao MySQL:", err);
//     return;
//   }
//   console.log("Conectado ao MySQL!");
// });

import mysql from "mysql2";

const connection = mysql.createConnection(process.env.MYSQL_URL);

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
  } else {
    console.log("Conectado ao MySQL!");
  }
});

export default connection;