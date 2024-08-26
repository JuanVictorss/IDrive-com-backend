window.addEventListener("load", main);

let carros = [];

async function main() {
  const dados = await fetch("http://localhost:3000/api/carros");
  const dadosTransformados = await dados.json();

  filmes = dadosTransformados;
}
