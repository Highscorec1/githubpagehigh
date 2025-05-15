document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card-aplicacion');
  let indiceActual = 0;

  const actualizarVista = () => {
    cards.forEach((card, i) => {
      card.classList.remove('visible');
      if (i === indiceActual) {
        card.classList.add('visible');
      }
    });
  };

  const avanzar = () => {
    indiceActual = (indiceActual + 1) % cards.length;
    actualizarVista();
  };

  const retroceder = () => {
    indiceActual = (indiceActual - 1 + cards.length) % cards.length;
    actualizarVista();
  };

  document.getElementById("btn-adelante").addEventListener("click", avanzar);
  document.getElementById("btn-atras").addEventListener("click", retroceder);

  actualizarVista();
});
