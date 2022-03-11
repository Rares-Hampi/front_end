const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "inncorect",
  database: "concurs",
});

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO try_smth (name, number) VALUES ('Raresdsfd', 'asdfsdsdf');";

  db.query(sqlInsert, (err, result) => {
    res.send("Hi, I start coding :)");
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
