// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const leftButtons = document.querySelectorAll('.left-btn');
    const rightButtons = document.querySelectorAll('.right-btn');
    const productGrids = document.querySelectorAll('.product-grid');

    leftButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            productGrids[index].scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        });
    });

    rightButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            productGrids[index].scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const changeImage = (season, direction) => {
        const container = document.querySelector(`#${season} .image-container`);
        const items = container.querySelectorAll('.item');
        let currentIndex = parseInt(container.dataset.currentIndex);
        const totalItems = items.length;

        items[currentIndex].classList.add('hidden');
        currentIndex = (currentIndex + direction + totalItems) % totalItems;
        items[currentIndex].classList.remove('hidden');

        container.dataset.currentIndex = currentIndex;
    };

    document.querySelectorAll('.prev-btn, .next-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const season = event.target.closest('.season').id;
            const direction = event.target.classList.contains('prev-btn') ? -1 : 1;
            changeImage(season, direction);
        });
    });

    // Initialize the display of images
    document.querySelectorAll('.image-container').forEach(container => {
        container.dataset.currentIndex = 0;
        container.querySelector('.item').classList.remove('hidden');
    });
});

//    #) JS  del botón DESPLAZARSE HACIA ARRIBA

const d = document;
const w = window;
// Declaro un limite de cuando se va a mostrar el boton
const showButtonLimit = 200;
//Identifico que clase quiero capturar con el querySelector
const btnScroll = d.querySelector(".scroll-top-btn");
const scrollContainer = () => {
  return d.documentElement || d.body;
};
// Sin exportar la función, siempre se invocará cuando se haga scroll
d.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showButtonLimit) {
    btnScroll.classList.remove("hidden");
  } else {
    btnScroll.classList.add("hidden");
  }
});
// La función que llamará el botón para volver al inicio.
const goTop = () => {
  d.body.scrollIntoView({
    behavior: "smooth",
  });
};
// Capturamos el evento click del botón
btnScroll.addEventListener("click", goTop);