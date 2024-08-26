import { dbPromise } from "./db.js";
import { v4 } from "uuid";

let carros = [
  {
    id: "veiculo-0",
    img: "/images/carros/toyota/corolla.jpg",
    modelo: "Toyota Corolla",
    descricao: "1.8 VVT-I HYBRID FLEX ALTIS PREMIUM CVT",
    ano: 2024,
    cambio: "Automático",
    carroceria: "Sedan",
    valor: 139900,
  },
  {
    id: "veiculo-1",
    img: "/images/carros/toyota/hilux.webp",
    modelo: "TOYOTA HILUX",
    descricao: "2.8 D-4D TURBO DIESEL CD SRV 4X4 AUTOMÁTICO",
    ano: 2024,
    cambio: "Automático",
    carroceria: "Picape",
    valor: 247900,
  },
  {
    id: "veiculo-2",
    img: "/images/carros/toyota/supra.webp",
    modelo: "TOYOTA SUPRA",
    descricao: "3.0 I6 TURBO GASOLINA PREMIUM AUTOMÁTICO",
    ano: 2024,
    cambio: "Automático",
    carroceria: "Esportivo",
    valor: 850000,
  },
  {
    id: "veiculo-3",
    img: "/images/carros/nissan/Sentra.webp",
    modelo: "NISSAN SENTRA",
    descricao: "2.0 16V GASOLINA ADVANCE XTRONIC",
    ano: 2024,
    cambio: "Automático",
    carroceria: "Sedan",
    valor: 137855,
  },
  {
    id: "veiculo-4",
    img: "/images/carros/nissan/versa.jpg",
    modelo: "NISSAN VERSA",
    descricao: "1.6 16V FLEX ADVANCE XTRONIC",
    ano: 2024,
    cambio: "Automático",
    carroceria: "Hatchback",
    valor: 109900,
  },
  {
    id: "veiculo-5",
    img: "/images/carros/nissan/frontier.webp",
    modelo: "NISSAN FRONTIER",
    descricao: "2.3 16V TURBO DIESEL PRO4X CD 4X4 AUTOMÁTICO",
    ano: 2024,
    cambio: "Automático",
    carroceria: "Picape",
    valor: 321900,
  },
  {
    id: "veiculo-6",
    img: "/images/carros/bmw/320i.webp",
    modelo: "BMW 320i",
    descricao: "2.0 SPORT 16V TURBO ACTIVE FLEX 4P AUTOMÁTICO",
    ano: 2024,
    cambio: "Automático",
    carroceria: "Sedan",
    valor: 149800,
  },
  {
    id: "veiculo-7",
    img: "/images/carros/bmw/i4.webp",
    modelo: "BMW I4",
    descricao: "ELÉTRICO eDRIVE35 M SPORT",
    ano: 2024,
    cambio: "Automático",
    carroceria: "Elétrico",
    valor: 389900,
  },
  {
    id: "veiculo-8",
    img: "/images/carros/bmw/m4.jpg",
    modelo: "BMW M4",
    descricao: "3.0 COUPÉ I6 24V GASOLINA 2P AUTOMÁTICO",
    ano: 2024,
    cambio: "Automático",
    carroceria: "Esportivo",
    valor: 429500,
  },
  {
    id: "veiculo-9",
    img: "/images/carros/hyundai/hb20.jpg",
    modelo: "HYUNDAI HB20",
    descricao: "1.0 12V FLEX COMFORT PLUS MANUAL",
    ano: 2024,
    cambio: "Manual",
    carroceria: "Hatchback",
    valor: 76690,
  },
  {
    id: "veiculo-10",
    img: "/images/carros/hyundai/creta.jpg",
    modelo: "HYUNDAI CRETA",
    descricao: "1.6 16V FLEX ACTION AUTOMÁTICO",
    ano: 2024,
    cambio: "Automático",
    carroceria: "SUV",
    valor: 118990,
  },
  {
    id: "veiculo-11",
    img: "/images/carros/hyundai/tucson.jpg",
    modelo: "HYUNDAI TUCSON",
    descricao: "1.6 16V T-GDI GASOLINA GLS ECOSHIFT",
    ano: 2024,
    cambio: "Automático",
    carroceria: "SUV",
    valor: 179990,
  },
];

async function adicionaCarrosAoBD() {
  const db = await dbPromise;

  for (let x = 0; x < carros.length; x++) {
    const id = v4();
    await db.run(
      `INSERT INTO carros (id, img, modelo, descricao, ano, cambio, carroceria, valor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        carros[x].img,
        carros[x].modelo,
        carros[x].descricao,
        carros[x].ano,
        carros[x].cambio,
        carros[x].carroceria,
        carros[x].valor,
      ]
    );
  }
}

adicionaCarrosAoBD().then(() => console.log("Dados inseridos no BD"));
