import { dbPromise } from "../database/db.js";

async function obtemTodosOsCarros() {
  const db = await dbPromise;

  const carros = await db.all("SELECT * FROM carros");
  return carros;
}

export { obtemTodosOsCarros };
