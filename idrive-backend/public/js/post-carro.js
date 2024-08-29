console.log("post-carro.js carregado");
document
  .getElementById("post-carro")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const img = document.getElementById("foto").value;
    const modelo = document.getElementById("modelo").value;
    const descricao = document.getElementById("descricao").value;
    const ano = document.getElementById("ano").value;
    const cambio = document.getElementById("cambio").value;
    const carroceria = document.getElementById("carroceria").value;
    const valor = document.getElementById("valor").value;

    const dadosDoVeiculo = {
      img,
      modelo,
      descricao,
      ano,
      cambio,
      carroceria,
      valor,
    };

    try {
      const response = await fetch("/api/registrarCarro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosDoVeiculo),
      });

      if (response.ok) {
        window.location.href = "http://localhost:3000/html/comprar.html";
      } else {
        const data = await response.json();
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      alert(`Erro de rede: ${error.message}`);
    }
  });
