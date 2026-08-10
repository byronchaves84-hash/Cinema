// =========================================================
// CARRUSEL CINEMAX — PC + MÓVIL TÁCTIL
// =========================================================

const carousel = document.querySelector('.carousel-container');
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images .anime-item');

let currentIndex = 0;
const totalImages = images.length;


// =========================================================
// CAMBIAR IMAGEN — ESCRITORIO
// =========================================================

function changeImage() {

    // En móvil no usamos transform
    if (window.innerWidth <= 600) {
        return;
    }

    const itemWidth = 280 + 15;

    const offset = -currentIndex * itemWidth;

    carouselImages.style.transform =
        `translateX(${offset}px)`;
}


// =========================================================
// SIGUIENTE
// =========================================================

function nextImage() {

    currentIndex++;

    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    changeImage();
}


// =========================================================
// ANTERIOR
// =========================================================

function prevImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    changeImage();
}


// =========================================================
// BOTONES
// =========================================================

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

if (nextButton) {
    nextButton.addEventListener('click', nextImage);
}

if (prevButton) {
    prevButton.addEventListener('click', prevImage);
}


// =========================================================
// MÓVIL — DESLIZAMIENTO TÁCTIL
// =========================================================

if (carousel) {

    let startX = 0;
    let startY = 0;

    carousel.addEventListener(
        'touchstart',
        function (e) {

            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;

        },
        { passive: true }
    );


    carousel.addEventListener(
        'touchend',
        function (e) {

            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;

            const differenceX = startX - endX;
            const differenceY = startY - endY;

            // Solo detectamos deslizamientos horizontales
            if (Math.abs(differenceX) > Math.abs(differenceY)) {

                // Deslizar hacia la izquierda
                if (differenceX > 50) {
                    nextImage();
                }

                // Deslizar hacia la derecha
                if (differenceX < -50) {
                    prevImage();
                }

            }

        },
        { passive: true }
    );
}


// =========================================================
// AL CAMBIAR ENTRE PC Y MÓVIL
// =========================================================

window.addEventListener('resize', function () {

    if (window.innerWidth > 600) {

        changeImage();

    } else {

        // En móvil eliminamos el desplazamiento por transform
        carouselImages.style.transform = 'none';

    }

});



