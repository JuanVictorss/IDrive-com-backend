import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SENHA = process.env.senha;

function autenticarJWT(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ message: "Token não fornecido ou inválido" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SENHA, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido" });
    }

    req.user = user;
    next();
  });
}

export default autenticarJWT;
