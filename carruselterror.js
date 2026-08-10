```javascript
// =========================================================
// CINEMAX — CARRUSELES PC + MÓVIL TÁCTIL
// =========================================================


// =========================================================
// CARRUSEL NORMAL
// =========================================================

const normalCarousel = document.querySelector('.carousel-container');
const normalImages = document.querySelector('.carousel-images');
const normalItems = document.querySelectorAll(
    '.carousel-images .anime-item'
);

let normalCurrentIndex = 0;
const normalTotalImages = normalItems.length;


// ---------------------------------------------------------
// Mover carrusel normal en PC
// ---------------------------------------------------------

function changeNormalImage() {

    if (window.innerWidth <= 600) {
        normalImages.style.transform = 'none';
        return;
    }

    if (!normalImages) return;

    const itemWidth = 280 + 15;

    const offset = -normalCurrentIndex * itemWidth;

    normalImages.style.transform =
        `translateX(${offset}px)`;
}


// ---------------------------------------------------------
// Siguiente
// ---------------------------------------------------------

function nextNormalImage() {

    if (normalTotalImages === 0) return;

    normalCurrentIndex++;

    if (normalCurrentIndex >= normalTotalImages) {
        normalCurrentIndex = 0;
    }

    changeNormalImage();
}


// ---------------------------------------------------------
// Anterior
// ---------------------------------------------------------

function prevNormalImage() {

    if (normalTotalImages === 0) return;

    normalCurrentIndex--;

    if (normalCurrentIndex < 0) {
        normalCurrentIndex = normalTotalImages - 1;
    }

    changeNormalImage();
}


// ---------------------------------------------------------
// Botones normales
// ---------------------------------------------------------

const normalNextButton = document.querySelector('.next');
const normalPrevButton = document.querySelector('.prev');

if (normalNextButton) {
    normalNextButton.addEventListener(
        'click',
        nextNormalImage
    );
}

if (normalPrevButton) {
    normalPrevButton.addEventListener(
        'click',
        prevNormalImage
    );
}


// ---------------------------------------------------------
// TÁCTIL — CARRUSEL NORMAL
// ---------------------------------------------------------

if (normalCarousel) {

    let startX = 0;
    let startY = 0;

    normalCarousel.addEventListener(
        'touchstart',
        function (event) {

            startX = event.touches[0].clientX;
            startY = event.touches[0].clientY;

        },
        { passive: true }
    );


    normalCarousel.addEventListener(
        'touchend',
        function (event) {

            const endX =
                event.changedTouches[0].clientX;

            const endY =
                event.changedTouches[0].clientY;

            const differenceX =
                startX - endX;

            const differenceY =
                startY - endY;


            // Solo detectar movimiento horizontal
            if (
                Math.abs(differenceX) >
                Math.abs(differenceY)
            ) {

                // Deslizar hacia izquierda
                if (differenceX > 50) {
                    nextNormalImage();
                }

                // Deslizar hacia derecha
                if (differenceX < -50) {
                    prevNormalImage();
                }

            }

        },
        { passive: true }
    );
}


// =========================================================
// CARRUSEL DE TERROR
// =========================================================

const horrorCarousel =
    document.querySelector('.horror-carousel-container');

const horrorImagesContainer =
    document.querySelector('.horror-carousel-images');

const horrorItems =
    document.querySelectorAll(
        '.horror-carousel-images .horror-anime-item'
    );

let horrorCurrentIndex = 0;

const horrorTotalImages =
    horrorItems.length;


// ---------------------------------------------------------
// Mover carrusel de terror en PC
// ---------------------------------------------------------

function changeHorrorImage() {

    if (window.innerWidth <= 600) {

        if (horrorImagesContainer) {
            horrorImagesContainer.style.transform =
                'none';
        }

        return;
    }

    if (!horrorImagesContainer) return;

    const itemWidth = 280 + 15;

    const offset =
        -horrorCurrentIndex * itemWidth;

    horrorImagesContainer.style.transform =
        `translateX(${offset}px)`;
}


// ---------------------------------------------------------
// Siguiente terror
// ---------------------------------------------------------

function nextHorrorImage() {

    if (horrorTotalImages === 0) return;

    horrorCurrentIndex++;

    if (
        horrorCurrentIndex >=
        horrorTotalImages
    ) {
        horrorCurrentIndex = 0;
    }

    changeHorrorImage();
}


// ---------------------------------------------------------
// Anterior terror
// ---------------------------------------------------------

function prevHorrorImage() {

    if (horrorTotalImages === 0) return;

    horrorCurrentIndex--;

    if (horrorCurrentIndex < 0) {
        horrorCurrentIndex =
            horrorTotalImages - 1;
    }

    changeHorrorImage();
}


// ---------------------------------------------------------
// Botones terror
// ---------------------------------------------------------

const horrorNextButton =
    document.querySelector('.next-horror');

const horrorPrevButton =
    document.querySelector('.prev-horror');


if (horrorNextButton) {

    horrorNextButton.addEventListener(
        'click',
        nextHorrorImage
    );
}


if (horrorPrevButton) {

    horrorPrevButton.addEventListener(
        'click',
        prevHorrorImage
    );
}


// ---------------------------------------------------------
// TÁCTIL — CARRUSEL DE TERROR
// ---------------------------------------------------------

if (horrorCarousel) {

    let horrorStartX = 0;
    let horrorStartY = 0;


    horrorCarousel.addEventListener(
        'touchstart',
        function (event) {

            horrorStartX =
                event.touches[0].clientX;

            horrorStartY =
                event.touches[0].clientY;

        },
        { passive: true }
    );


    horrorCarousel.addEventListener(
        'touchend',
        function (event) {

            const horrorEndX =
                event.changedTouches[0].clientX;

            const horrorEndY =
                event.changedTouches[0].clientY;


            const differenceX =
                horrorStartX - horrorEndX;

            const differenceY =
                horrorStartY - horrorEndY;


            // Solo detectar movimiento horizontal
            if (
                Math.abs(differenceX) >
                Math.abs(differenceY)
            ) {

                // Deslizar izquierda
                if (differenceX > 50) {
                    nextHorrorImage();
                }

                // Deslizar derecha
                if (differenceX < -50) {
                    prevHorrorImage();
                }

            }

        },
        { passive: true }
    );
}


// =========================================================
// CAMBIO DE TAMAÑO DE VENTANA
// =========================================================

window.addEventListener(
    'resize',
    function () {

        if (window.innerWidth > 600) {

            changeNormalImage();
            changeHorrorImage();

        } else {

            if (normalImages) {
                normalImages.style.transform =
                    'none';
            }

            if (horrorImagesContainer) {
                horrorImagesContainer.style.transform =
                    'none';
            }

        }

    }
);
```
