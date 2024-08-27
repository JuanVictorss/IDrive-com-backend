console.log("headerEfooter carregado");

function loadHTML(id, url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => console.error("Erro ao carregar HTML:", error));
}

loadHTML("header-placeholder", "header.html");
loadHTML("footer-placeholder", "footer.html");
