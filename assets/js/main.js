var splideHome = new Splide(".slider__home", {
  classes: {
    arrows: "splide__arrows translate-y-0 transform",
    arrow: "rounded-full border-[1px] border-white",
    prev: "splide__arrow--prev order-1 relative translate-y-0 transform [&>svg]:fill-white left-0 [&>svg]:w-[25px] [&>svg]:h-[25px] p-[10px]",
    next: "splide__arrow--next order-3 relative translate-y-0 transform [&>svg]:fill-white right-0 [&>svg]:w-[25px] [&>svg]:h-[25px] p-[10px]",
    pagination: "splide__pagination",
    page: "splide__pagination__page border-2 border-solid w-3 h-3 lg:w-4 lg:h-4 shadow-md",
  },
  rewind: true,
  autoplay: "play",
});
splideHome.mount();

var splideImageSlider = new Splide("#image-slider", {
  classes: {
    pagination:
      "splide__pagination relative mt-[20px] flex justify-center gap-[10px]",
    page: "splide__pagination__page border-2 border-solid w-3 h-3 lg:w-4 lg:h-4 shadow-md",
  },
  rewind: true,
  loop: true,
  autoplay: true,
  interval: 2000,
  arrows: false,
});
splideImageSlider.mount();


var splideEventSlider = new Splide("#event-slider", {
  classes: {
    arrows:
      "splide__arrows absolute inset-0 flex items-center justify-between px-4",
    arrow: "bg-primaryColor text-white rounded-full p-2",
    prev: "splide__arrow--prev",
    next: "splide__arrow--next",
  },
  rewind: true,
  loop: true,
  autoplay: true,
  interval: 3000,
  arrows: true,
});
splideEventSlider.mount();

var splideNextEventSlider = new Splide("#next-event-slider", {
  classes: {
    arrows: "splide__arrows absolute inset-0 flex items-center justify-between px-[20px]",
    arrow: "bg-primaryColor text-white rounded-full p-2",
    prev: "splide__arrow--prev",
    next: "splide__arrow--next",
  },
  rewind: true,
  loop: true,
  autoplay: true,
  interval: 3000,
  arrows: true,
});
splideNextEventSlider.mount();

// Obtener elementos
const datePicker = document.getElementById("date-picker");
const dateModal = document.getElementById("date-modal");
const dateInput = document.getElementById("date-input");
const dateDisplay = document.getElementById("date-display");
const closeModalButton = document.getElementById("close-modal");

// Abrir el modal al hacer clic en el contenedor del ícono y la fecha
datePicker.addEventListener("click", () => {
  dateModal.style.display = "flex";
});

// Cerrar el modal al hacer clic en el botón de cerrar
closeModalButton.addEventListener("click", () => {
  closeDateModal();
});

// Cerrar el modal y actualizar la fecha cuando se selecciona una fecha
dateInput.addEventListener("change", () => {
  updateDateDisplay();
  closeDateModal();
});

// Función para cerrar el modal
function closeDateModal() {
  dateModal.style.display = "none";
}

// Función para actualizar la visualización de la fecha en el span
function updateDateDisplay() {
  if (dateInput.value) {
    // Formatear la fecha
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateInput.value).toLocaleDateString(
      "es-ES",
      options
    );
    dateDisplay.textContent = formattedDate;
  } else {
    dateDisplay.textContent = "Fecha";
  }
}

// Cerrar el modal al hacer clic fuera del cuadro de diálogo
window.addEventListener("click", (event) => {
  if (event.target === dateModal) {
    closeDateModal();
  }
});
