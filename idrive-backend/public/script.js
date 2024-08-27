console.log("script.js carregado");

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("z_bmw.html")) {
    carregarCarros("/api/carros/bmw");
  } else if (window.location.pathname.endsWith("z_hyundai.html")) {
    carregarCarros("/api/carros/hyundai");
  } else if (window.location.pathname.endsWith("z_nissan.html")) {
    carregarCarros("/api/carros/nissan");
  } else if (window.location.pathname.endsWith("z_toyota.html")) {
    carregarCarros("/api/carros/toyota");
  } else {
    carregarCarros("/api/carros");
  }
});

function carregarCarros(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const carrosContainer = document.getElementById("carros-container");
      carrosContainer.innerHTML = "";

      data.forEach((car) => {
        const carElement = document.createElement("div");
        carElement.innerHTML = `
          <a>
            <img src="${car.img}" alt="${car.modelo}">
            <h2>${car.modelo}</h2>
            <p>${car.descricao}</p>
            <p>Valor: R$ ${car.valor.toFixed(2)}</p>
          </a>
        `;
        carrosContainer.appendChild(carElement);
      });
    })
    .catch((error) => console.log("Erro ao buscar dados:", error));
}

document
  .getElementById("register")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (senha !== confirmarSenha) {
      alert("Senhas diferentes.");
      return;
    }

    const dadosDoUsuario = {
      nome: nome,
      email: email,
      senha: senha,
      confirmarSenha: confirmarSenha,
    };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosDoUsuario),
      });
      if (response.ok) {
        window.location.href = "http://localhost:3000/html/login.html";
      } else {
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      alert(`Erro de rede: ${error.message}`);
    }
  });
