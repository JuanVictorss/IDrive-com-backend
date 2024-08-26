import { dbPromise } from "../database/db.js";

async function obterUsuarioPorEmail() {
  const db = await dbPromise;

  const usuario = await db.get("SELECT * FROM usuarios WHERE nome = ?", [
    email,
  ]);
  return usuario;
}

export { obterUsuarioPorEmail };
