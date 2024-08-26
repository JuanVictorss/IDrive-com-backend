import { Router } from "express";
import jwt from "jsonwebtoken";
import { obterUsuarioPorEmail, criarUsuario } from "../models/usuarios.js";
const SEGREDO = "VOCÊNAOPODESABER";

const routerUsuarios = Router();

routerUsuarios.post("/api/register", async (req, res) => {
  const { nome, email, senha, confirmarSenha } = req.body;

  if (senha !== confirmarSenha) {
    return res.status(400).json({ message: "Senhas diferentes" });
  }

  try {
    const usuarioExistente = await obterUsuarioPorEmail(email);
    if (usuarioExistente) {
      return res.status(400).json({ message: "Conta já existe" });
    }
    await criarUsuario(nome, email, senha);
    return res.status(201).json({ message: "Usuário registrado com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: "Erro no servidor" });
  }
});

routerUsuarios.post("/api/login", async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await obterUsuarioPorEmail(email);
    if (usuario) {
      if (usuario.senha === senha) {
        return res.status(200).json({ message: "Login bem-sucedido" });
      } else {
        return res.status(401).json({ message: "Usuário/Senha Incorreta" });
      }
    } else {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Erro no servidor" });
  }
});

export { routerUsuarios };
