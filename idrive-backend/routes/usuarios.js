import { Router } from "express";
import { obterUsuarioPorEmail, criarUsuario } from "../models/usuarios.js";
import bcrypt from "bcrypt";
const routerUsuarios = Router();

routerUsuarios.post("/api/register", async (req, res) => {
  const { nome, email, senha } = req.body;
  console.log(req.body);
  try {
    const usuarioExiste = await obterUsuarioPorEmail(email);
    if (usuarioExiste) {
      return res.status(400).json({ message: "Conta já existe" });
    }
    await criarUsuario(nome, email, senha);
    return res.status(201).json({ message: "ain" });
  } catch (error) {
    console.error("Erro ao registrar: ", error);
    return res.status(500).json({ message: "Erro no servidor" });
  }
});

routerUsuarios.post("/api/login", async (req, res) => {
  console.log("Request body:", req.body);
  const { email, senha } = req.body;

  try {
    const usuario = await obterUsuarioPorEmail(email);
    if (usuario) {
      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
      if (senhaCorreta) {
        return res.status(200).json({ message: "Login bem-sucedido" });
      } else {
        return res.status(401).json({ message: "Senha Incorreta" });
      }
    } else {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return res.status(500).json({ message: "Erro no servidor" });
  }
});

export { routerUsuarios };
