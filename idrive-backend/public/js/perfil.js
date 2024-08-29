function carregarUsuario(url) {
  const token = localStorage.getItem("jwtToken");

  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const usuarioNome = document.getElementById("nome");
      const usuarioEmail = document.getElementById("email");

      if (usuarioNome) {
        usuarioNome.textContent = data.nome;
      }
      if (usuarioEmail) {
        usuarioEmail.textContent = data.email;
      }
    });
}

const token = localStorage.getItem("jwtToken");
if (token) {
  document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith("perfil.html")) {
      carregarUsuario("/api/usuario");
    }
  });
} else {
  window.location.href = "../html/login.html";
}
