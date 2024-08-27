import { Router } from "express";
import {
  obtemTodosOsCarros,
  obtemBMW,
  obtemHyundai,
  obtemNissan,
  obtemToyota,
} from "../models/carros.js";

const routerCarros = Router();
const routerBMW = Router();
const routerHyundai = Router();
const routerNissan = Router();
const routerToyota = Router();

routerCarros.get("/api/carros", async (_, resposta) => {
  const carros = await obtemTodosOsCarros();

  return resposta.status(200).json(carros);
});

routerBMW.get("/api/carros/bmw", async (_, resposta) => {
  const carros = await obtemBMW();
  return resposta.status(200).json(carros);
});

routerHyundai.get("/api/carros/hyundai", async (_, resposta) => {
  const carros = await obtemHyundai();
  return resposta.status(200).json(carros);
});

routerNissan.get("/api/carros/nissan", async (_, resposta) => {
  const carros = await obtemNissan();
  return resposta.status(200).json(carros);
});

routerToyota.get("/api/carros/toyota", async (_, resposta) => {
  const carros = await obtemToyota();
  return resposta.status(200).json(carros);
});

export { routerCarros, routerBMW, routerHyundai, routerNissan, routerToyota };
