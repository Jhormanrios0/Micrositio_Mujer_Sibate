var splide = new Splide(".slider__home", {
  classes: {
    arrows: "splide__arrows translate-y-0 transform",
    arrow: "rounded-full border-[1px] border-white",
    prev: "splide__arrow--prev order-1 relative translate-y-0 transform [&>svg]:fill-white left-0 [&>svg]:w-[25px] [&>svg]:h-[25px] p-[10px]",
    next: "splide__arrow--next order-3 relative translate-y-0 transform [&>svg]:fill-white right-0 [&>svg]:w-[25px] [&>svg]:h-[25px] p-[10px]",
    pagination: "splide__pagination ",
    page: "splide__pagination__page border-2 border-solid  w-3 h-3  lg:w-4 lg:h-4 shadow-md ",
  },
  rewind: true,
  autoplay: "play",
});
splide.mount();

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop",
    perPage: 3,
    gap: "0.5rem",
    pagination: true,
    arrows: true,
    autoplay: true,
    interval: 70000,
    breakpoints: {
      500: {
        perPage: 1,
      },
    },
  }).mount();
});

const btnSemana = document.getElementById("btnSemana");
const btnMes = document.getElementById("btnMes");
const apartado1 = document.getElementById("apartado1");
const apartado2 = document.getElementById("apartado2");

// Función para mostrar el apartado seleccionado y activar el borde
function mostrarApartado(apartadoAMostrar) {
  if (apartadoAMostrar === "semana") {
    apartado1.classList.remove("hidden");
    apartado2.classList.add("hidden");
    activarBorde(btnSemana);
  } else {
    apartado2.classList.remove("hidden");
    apartado1.classList.add("hidden");
    activarBorde(btnMes);
  }
}

// Función para activar el borde del elemento seleccionado
function activarBorde(elemento) {
  btnSemana.classList.remove("border-b-4", "border-secundaryColor");
  btnMes.classList.remove("border-b-4", "border-secundaryColor");
  elemento.classList.add("border-b-4", "border-secundaryColor");
}

// Evento para mostrar el contenido al hacer clic
btnSemana.addEventListener("click", () => mostrarApartado("semana"));
btnMes.addEventListener("click", () => mostrarApartado("mes"));

// Mostrar "Esta Semana" por defecto al cargar la página
window.addEventListener("DOMContentLoaded", () => mostrarApartado("semana"));
