let retos = [];
let paginaActual = 1;
const retosPorPagina = 5;

document.addEventListener("DOMContentLoaded", () => {
  fetch("data/retos.json")
    .then(response => response.json())
    .then(data => {
      retos = data;
      mostrarRetosPagina(paginaActual);
    });
});

function mostrarRetosPagina(pagina) {
  const contenedor = document.getElementById("contenedor-retos");
  contenedor.innerHTML = "";

  const inicio = (pagina - 1) * retosPorPagina;
  const fin = inicio + retosPorPagina;
  const retosPagina = retos.slice(inicio, fin);

  retosPagina.forEach(reto => {
    const section = document.createElement("section");
    section.className = "reto";
    section.innerHTML = `
      <h2>${reto.titulo}</h2>
      <p>${reto.descripcion}</p>
      <a href="javascript:void(0);" class="btn-unirse" onclick="abrirModalKotlin('${reto.url}')">Ver más</a>
    `;
    contenedor.appendChild(section);
  });

  document.getElementById("indicador-pagina").textContent = `Página ${pagina} de ${Math.ceil(retos.length / retosPorPagina)}`;
}

function paginaAnterior() {
  if (paginaActual > 1) {
    paginaActual--;
    mostrarRetosPagina(paginaActual);
  }
}

function paginaSiguiente() {
  if (paginaActual < Math.ceil(retos.length / retosPorPagina)) {
    paginaActual++;
    mostrarRetosPagina(paginaActual);
  }
}

function abrirModalKotlin(url) {
  const iframe = document.getElementById("iframeKotlin");
  iframe.src = url;
  document.getElementById("modalKotlin").classList.remove("oculto");
}

function cerrarModalKotlin() {
  document.getElementById("modalKotlin").classList.add("oculto");
  document.getElementById("iframeKotlin").src = "";
}
