import { Router } from "express";
import { obterUsuarioPorEmail, criarUsuario } from "../models/usuarios.js";
const routerRegistro = Router();

routerRegistro.post("/api/register", async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const usuarioExiste = await obterUsuarioPorEmail(email);
    if (usuarioExiste) {
      return res.status(400).json({ message: "Conta já existe" });
    }
    await criarUsuario(nome, email, senha);
    return res.status(201).json({ message: "usuário criado" });
  } catch (error) {
    console.error("Erro ao registrar: ", error);
    return res.status(500).json({ message: "Erro no servidor" });
  }
});

export { routerRegistro };
