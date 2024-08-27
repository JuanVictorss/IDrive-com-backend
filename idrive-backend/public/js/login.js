console.log("login.js carregado");

document.getElementById("login").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const dadosDoLogin = {
    email: email,
    senha: senha,
  };

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dadosDoLogin),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Login realizado com sucesso.");

      window.location.href = "/dashboard";
    } else {
      alert(`Erro: ${data.message}`);
    }
  } catch (error) {
    console.log(`Erro de rede: ${error.message}`);
  }
});
