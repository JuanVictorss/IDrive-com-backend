import { Router } from "express";
import { obtemTodosOsCarros } from "../models/carros.js";

const routerCarros = Router();

routerCarros.get("/api/carros", async (_, resposta) => {
  const carros = await obtemTodosOsCarros();

  return resposta.status(200).json(carros);
});

export { routerCarros };
