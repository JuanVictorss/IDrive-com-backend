import express, { query } from "express";
import cors from "cors";
import sqlite3 from "sqlite3";

const app = express();

//Configurando BD
const db = new sqlite3.Database("./database/idrive.db");

//configuração da API
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Rotas
//Rota todos
app.get("/api/carros", (req, res) => {
  db.all("SELECT * FROM carros", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});
//Rota BMW
app.get("/api/carros/bmw", (req, res) => {
  db.all("SELECT * FROM carros WHERE modelo LIKE ?", ["%BMW%"], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});
//Rota HYUNDAI
app.get("/api/carros/hyundai", (req, res) => {
  db.all(
    "SELECT * FROM carros WHERE modelo LIKE ?",
    ["%HYUNDAI%"],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    }
  );
});
//Rota NISSAN
app.get("/api/carros/nissan", (req, res) => {
  db.all(
    "SELECT * FROM carros WHERE modelo LIKE ?",
    ["%NISSAN%"],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    }
  );
});
//Rota TOYOTA
app.get("/api/carros/toyota", (req, res) => {
  db.all(
    "SELECT * FROM carros WHERE modelo LIKE ?",
    ["%TOYOTA%"],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    }
  );
});

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`);
});
