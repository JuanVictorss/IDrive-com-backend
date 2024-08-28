import { dbPromise } from "./db.js";

async function criarTabelas() {
  const db = await dbPromise;

  await db.run(`CREATE TABLE IF NOT EXISTS carros(
    id TEXT PRIMARY KEY,
    img TEXT,
    modelo TEXT,
    descricao TEXT,
    ano INTEGER,
    cambio TEXT,
    carroceria TEXT,
    valor REAL
)`);

  await db.run(`CREATE TABLE IF NOT EXISTS usuarios(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL
    )`);
}

criarTabelas();
