import { dbPromise } from "../database/db.js";

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

export { obtemTodosOsCarros, obtemBMW, obtemHyundai, obtemNissan, obtemToyota };
