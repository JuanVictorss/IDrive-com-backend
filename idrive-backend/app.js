import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import { routerRegistro } from "./routes/registro.js";
import { routerPostCarro } from "./routes/registrarCarro.js";
import { routerLogin } from "./routes/login.js";
import {
  routerCarros,
  routerBMW,
  routerNissan,
  routerHyundai,
  routerToyota,
} from "./routes/carros.js";

const app = express();

//Configurando BD
const db = new sqlite3.Database("./database/idrive.db");

//configuração da API
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Rotas
app.use(routerRegistro);
app.use(routerLogin);

// Rotas de carros
app.use(routerCarros);
app.use(routerBMW);
app.use(routerToyota);
app.use(routerHyundai);
app.use(routerNissan);
app.use(routerPostCarro);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`);
});
