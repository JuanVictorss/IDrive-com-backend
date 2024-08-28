console.log("headerEfooter.js carregado");

function loadHTML(id, url) {
  return fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => console.error("Erro ao carregar HTML:", error));
}

document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("jwtToken");

  if (token) {
    await loadHTML("header-placeholder", "headerLog.html");
    const logout = document.getElementById("logout");
    if (logout) {
      logout.addEventListener("click", async (event) => {
        event.preventDefault();
        localStorage.removeItem("jwtToken");
        window.location.href = "http://localhost:3000/html/login.html";
      });
    }
  } else {
    await loadHTML("header-placeholder", "header.html");
  }
  await loadHTML("footer-placeholder", "footer.html");
});
