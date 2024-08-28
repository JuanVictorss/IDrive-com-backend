console.log("carros.js carregado");

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("z_bmw.html")) {
    carregarCarros("/api/bmw");
  } else if (window.location.pathname.endsWith("z_hyundai.html")) {
    carregarCarros("/api/hyundai");
  } else if (window.location.pathname.endsWith("z_nissan.html")) {
    carregarCarros("/api/nissan");
  } else if (window.location.pathname.endsWith("z_toyota.html")) {
    carregarCarros("/api/toyota");
  } else if (window.location.pathname.endsWith("comprar.html")) {
    carregarCarros("/api/carros");
  } else if (window.location.pathname.endsWith("carro.html")) {
    carregarCarro();
  }
});

function carregarCarros(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const carrosContainer = document.getElementById("carros-container");
      carrosContainer.innerHTML = "";

      data.forEach((carro) => {
        const carroElement = document.createElement("div");
        carroElement.innerHTML = `
          <a href="carro.html?id=${carro.id}">
            <img src="${carro.img}" alt="${carro.modelo}">
            <h2>${carro.modelo}</h2>
            <p>${carro.descricao}</p>
            <p>Valor: R$ ${carro.valor.toFixed(2)}</p>
          </a>
        `;
        carrosContainer.appendChild(carroElement);
      });
    })
    .catch((error) => console.log("Erro ao buscar dados:", error));
}

function carregarCarro() {
  const carroID = buscarID("id");
  fetch(`/api/carros/${carroID}`)
    .then((response) => response.json())
    .then((carro) => {
      if (carro) {
        document.getElementById("imagem-carro").src = carro.img;
        document.getElementById("modelo-carro").textContent = carro.modelo;
        document.getElementById("ano-carro").textContent = carro.ano;
        document.getElementById("cambio-carro").textContent = carro.cambio;
        document.getElementById("carroceria-carro").textContent =
          carro.carroceria;
        document.getElementById("descricao-carro").textContent =
          carro.descricao;
        document.getElementById("preco-carro").textContent =
          carro.valor.toFixed(2);
      }
    });
}

function buscarID(id) {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(id);
}
