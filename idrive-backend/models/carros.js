import { dbPromise } from "../database/db.js";
import { v4 } from "uuid";

async function obtemTodosOsCarros() {
  const db = await dbPromise;
  const carros = await db.all("SELECT * FROM carros");
  return carros;
}

async function obtemBMW() {
  const db = await dbPromise;
  const carros = await db.all("SELECT * FROM carros WHERE modelo LIKE ?", [
    "%BMW%",
  ]);
  return carros;
}

async function obtemHyundai() {
  const db = await dbPromise;
  const carros = await db.all("SELECT * FROM carros WHERE modelo LIKE ?", [
    "%HYUNDAI%",
  ]);
  return carros;
}

async function obtemNissan() {
  const db = await dbPromise;
  const carros = await db.all("SELECT * FROM carros WHERE modelo LIKE ?", [
    "%NISSAN%",
  ]);
  return carros;
}

async function obtemToyota() {
  const db = await dbPromise;
  const carros = await db.all("SELECT * FROM carros WHERE modelo LIKE ?", [
    "%TOYOTA%",
  ]);
  return carros;
}

async function obtemCarroPorID(id) {
  const db = await dbPromise;
  const carro = await db.get("SELECT * FROM carros WHERE id = ?", [id]);
  return carro;
}

async function criarCarro(
  img,
  modelo,
  descricao,
  ano,
  cambio,
  carroceria,
  valor
) {
  try {
    const db = await dbPromise;
    const id = v4();
    return await db.run(
      "INSERT INTO carros (id, img, modelo, descricao, ano, cambio, carroceria, valor) VALUES (?,?,?,?,?,?,?,?)",
      [id, img, modelo, descricao, ano, cambio, carroceria, valor]
    );
  } catch (error) {
    console.error("Erro ao adicionar veiculo", error);
    throw new Error("Erro ao criar veiculo");
  }
}

export {
  obtemCarroPorID,
  obtemTodosOsCarros,
  obtemBMW,
  obtemHyundai,
  obtemNissan,
  obtemToyota,
  criarCarro,
};
