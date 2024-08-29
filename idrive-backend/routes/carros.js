import { Router } from "express";
import {
  obtemTodosOsCarros,
  obtemBMW,
  obtemHyundai,
  obtemNissan,
  obtemToyota,
  obtemCarroPorID,
  deletaCarroPorID,
} from "../models/carros.js";

const routerCarros = Router();
const routerBMW = Router();
const routerNissan = Router();
const routerToyota = Router();
const routerHyundai = Router();

routerCarros.get("/api/carros", async (_, resposta) => {
  const carros = await obtemTodosOsCarros();
  return resposta.status(200).json(carros);
});

routerBMW.get("/api/bmw", async (_, resposta) => {
  const carros = await obtemBMW();
  return resposta.status(200).json(carros);
});

routerHyundai.get("/api/hyundai", async (_, resposta) => {
  const carros = await obtemHyundai();
  return resposta.status(200).json(carros);
});

routerNissan.get("/api/nissan", async (_, resposta) => {
  const carros = await obtemNissan();
  return resposta.status(200).json(carros);
});

routerToyota.get("/api/toyota", async (_, resposta) => {
  const carros = await obtemToyota();
  return resposta.status(200).json(carros);
});

routerCarros.get("/api/carros/:id", async (req, res) => {
  const carro = await obtemCarroPorID(req.params.id);
  if (carro) {
    return res.status(200).json(carro);
  } else {
    return res.status(404).json({ message: "Carro não encontrado" });
  }
});

routerCarros.delete("/api/carros/:id", async (req, res) => {
  const carro = await obtemCarroPorID(req.params.id);
  if (carro) {
    await deletaCarroPorID(req.params.id);
    return res.status(200).json({ message: "Carro deletado com sucesso" });
  } else {
    return res.status(404).json({ message: "Carro não encontrado" });
  }
});

export { routerCarros, routerBMW, routerHyundai, routerNissan, routerToyota };
