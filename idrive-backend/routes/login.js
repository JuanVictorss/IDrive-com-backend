import { Router } from "express";
import { obterUsuarioPorEmail } from "../models/usuarios.js";
import autenticarJWT from "../middleware/JWT.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SENHA = "MINHASENHASUPERSECRETA É 123";

const routerLogin = Router();

routerLogin.post("/api/login", async (req, res) => {
  const { email, senha } = req.body;
  try {
    const usuario = await obterUsuarioPorEmail(email);
    if (usuario) {
      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
      if (senhaCorreta) {
        const token = jwt.sign(
          { id: usuario.id, email: usuario.email },
          SENHA,
          {
            expiresIn: "100s",
          }
        );
        console.log(token);
        return res.status(200).json({ message: "Logado", token: token });
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

routerLogin.get("/api/usuario", autenticarJWT, async (req, res) => {
  const email = req.user.email;
  const usuario = await obterUsuarioPorEmail(email);
  if (usuario) {
    return res.status(200).json({
      nome: usuario.nome,
      email: usuario.email,
    });
  }
});

export { routerLogin };
