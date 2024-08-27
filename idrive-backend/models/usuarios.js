import bcrypt from "bcrypt";
import { dbPromise } from "../database/db.js";

async function obterUsuarioPorEmail(email) {
  const db = await dbPromise;

  const usuario = await db.get("SELECT * FROM usuarios WHERE email = ?", [
    email,
  ]);
  return usuario;
}

async function criarUsuario(nome, email, senha) {
  try {
    const db = await dbPromise;

    const senhaHash = await bcrypt.hash(senha, 13);

    return await db.run(
      "INSERT INTO usuarios (nome, email, senha) VALUES (?,?,?)",
      [nome, email, senhaHash]
    );
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw new Error("Erro ao criar usuário");
  }
}

export { obterUsuarioPorEmail, criarUsuario };
