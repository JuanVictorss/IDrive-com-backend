console.log("registro.js carregado");

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
