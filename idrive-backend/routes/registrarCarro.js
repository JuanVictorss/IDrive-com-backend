import { criarCarro } from "../models/carros.js";
import { Router } from "express";

const routerPostCarro = Router();

routerPostCarro.post("/api/registrarCarro", async (req, res) => {
  const { img, modelo, descricao, ano, cambio, carroceria, valor } = req.body;
  console.log(req.body);
  try {
    await criarCarro(img, modelo, descricao, ano, cambio, carroceria, valor);
    return res.status(201).json({ message: "Carro criado" });
  } catch (error) {
    console.error("Erro ao criar carro:", error);
    return res.status(500).json({ message: "Erro ao criar carro" });
  }
});

export { routerPostCarro };
