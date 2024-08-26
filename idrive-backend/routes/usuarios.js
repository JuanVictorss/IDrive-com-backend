const { Router } = require("express");
const jwt = require("jsonwebtoken");
const obterUsuarioPorEmail = require("./obterUsuarioPorEmail");
const SEGREDO = "VOCÊNAOPODESABER";

const routerUsuarios = Router();

routerUsuarios.post("/api/login", async (req, res) => {
  const { ususario, senha, token } = req.body;

  if (token) {
    try {
      const isValido = jwt.verify(token, SEGREDO);
      if (isValido) {
        return res.status(200).json({ message: "Token Válido" });
      } else {
        return res.status(401).json({ message: "Token Inválido" });
      }
    } catch {
      return res.status(401).json({ message: "Token Inválido" });
    }
  }

  try {
    const u = await obterUsuarioPorEmail(ususario);
    if (u != null) {
      if (u.senha === senha) {
        const token = jwt.sign({ ususario, regraDeAcesso: "ADM" }, SEGREDO, {
          expiresIn: "20s",
        });
        return res.status(200).json({ token });
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

module.exports = routerUsuarios;
