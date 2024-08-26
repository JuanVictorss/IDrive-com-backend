import { dbPromise } from "../database/db.js";

async function obterUsuarioPorEmail(email) {
  const db = await dbPromise;

  const usuario = await db.get("SELECT * FROM usuarios WHERE email = ?", [
    email,
  ]);
  return usuario;
}

async function criarUsuario(nome, email, senha) {
  const db = await dbPromise;
  return await db.run(
    "INSERT INTO usuarios (nome, email, senha) VALUES (?,?,?)",
    [nome, email, senha]
  );
}

export { obterUsuarioPorEmail, criarUsuario };
