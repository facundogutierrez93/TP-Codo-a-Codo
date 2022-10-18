/* Funciones */

function createArray(cantFotos, carouselContenedor, category, classname, description) {
    const ARRAY_PRODUCTS = Array.from({ length: cantFotos }, (_, i) => i + 1)
    for (const product of ARRAY_PRODUCTS) {
        carouselContenedor.appendChild(carouselItemBuilder(product, category, classname, description))
    }
}

function carouselItemBuilder(number, category, classname, description) {
    const IMAGE_CONTAINER = document.createElement('div')
    IMAGE_CONTAINER.className = `producto ${classname}`
    const IMAGE = document.createElement('img')
    IMAGE.src = `../images/Productos/${category}/${number}.jpg`
    IMAGE.alt = `${description}`
    IMAGE_CONTAINER.appendChild(IMAGE)
    return IMAGE_CONTAINER
}

function createCarouselArrow(selectorFila, selectorFlechaIzq, selectorFlechaDer, selectorIndicador) {
    const FILA = document.querySelector(selectorFila);

    const FLECHA_IZQ = document.getElementById(selectorFlechaIzq);
    const FLECHA_DER = document.getElementById(selectorFlechaDer);

    FLECHA_DER.addEventListener('click', () => {
        FILA.scrollLeft += FILA.offsetWidth;
        const indicadorActivo = document.querySelector(`${selectorIndicador} .activo`);
        if (indicadorActivo.nextSibling) {
            indicadorActivo.nextSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });

    FLECHA_IZQ.addEventListener('click', () => {
        FILA.scrollLeft -= FILA.offsetWidth;
        const indicadorActivo = document.querySelector(`${selectorIndicador} .activo`);
        if (indicadorActivo.previousSibling) {
            indicadorActivo.previousSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });
}

function calculoIndicadores(selectorIndicador, selectorFila, selectorProduct) {
    const FILA = document.querySelector(selectorFila);
    const PRODUCTO = document.querySelectorAll(selectorProduct);
    const NUM_PAGINAS_TAZAS_WEB = Math.ceil(PRODUCTO.length / 5);
    const NUM_PAGINAS_TAZAS_TABLET = Math.ceil(PRODUCTO.length / 4);
    const NUM_PAGINAS_TAZAS_MOBIL = Math.ceil(PRODUCTO.length / 2);

    const INDICADORES = document.querySelector(selectorIndicador);
    INDICADORES.innerHTML = ''
    if (window.innerWidth < 576) {
        for (let i = 0; i < NUM_PAGINAS_TAZAS_MOBIL; i++) {
            const INDICADOR = document.createElement('button');
            INDICADORES.appendChild(INDICADOR);
            indicadorActivo(INDICADOR, FILA, i, selectorIndicador)
        }
    } else if (window.innerWidth < 768) {
        for (let i = 0; i < NUM_PAGINAS_TAZAS_TABLET; i++) {
            const INDICADOR = document.createElement('button');
            INDICADORES.appendChild(INDICADOR);
            indicadorActivo(INDICADOR, FILA, i, selectorIndicador)
        }
    } else {
        for (let i = 0; i < NUM_PAGINAS_TAZAS_WEB; i++) {
            const INDICADOR = document.createElement('button');
            INDICADORES.appendChild(INDICADOR);
            indicadorActivo(INDICADOR, FILA, i, selectorIndicador)
        }
    };
}

function indicadorActivo(indicador, fila, i, selectorIndicador) {
    if (i === 0) {
        indicador.classList.add('activo');
    }
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector(`${selectorIndicador} .activo`).classList.remove('activo');
        e.target.classList.add('activo');
    });
}


/* Funcion para crear Carousel productos por categoria */

function createCarouselByCategory(selectorCarousel, cantFotos, category, classname, descriptionImg, selectorContenedorCarousel, selectorFlechaIzq, selectorFlechaDer, selectorIndicadores, selectorProduct) {
    const CAROUSEL_CONTENEDOR = document.getElementById(selectorCarousel);
    const CANT_FOTOS = cantFotos;
    const ARRAY_TAZAS = createArray(CANT_FOTOS, CAROUSEL_CONTENEDOR, category, classname, descriptionImg);
    const CAROUSEL_ARROW_TAZAS = createCarouselArrow(selectorContenedorCarousel, selectorFlechaIzq, selectorFlechaDer, selectorIndicadores);
    const INDICADORES_TAZAS = calculoIndicadores(selectorIndicadores, selectorContenedorCarousel, selectorProduct);
    window.addEventListener('resize', () => { calculoIndicadores(selectorIndicadores, selectorContenedorCarousel, selectorProduct) });

}


/* Creacion carouseles por categoria de producto */
/* Tazas */

const CREATE_CAROUSEL_TAZAS = createCarouselByCategory('carousel-tazas', 15, 'Tazas', 'producto-tazas', 'foto taza', '.contenedor-carousel-tazas', 'flecha-izquierda-tazas', 'flecha-derecha-tazas', '#indicadores-tazas', '.producto-tazas');

/* Platos, bandejas y bowls */
const CREATE_CAROUSEL_PLATOS = createCarouselByCategory('carousel-platos', 15, 'Platos bandejas bowls', 'producto-platos', 'foto plato, producto o bowl', '.contenedor-carousel-platos', 'flecha-izquierda-platos', 'flecha-derecha-platos', '#indicadores-platos', '.producto-platos');

/* Mates */
const CREATE_CAROUSEL_MATES = createCarouselByCategory('carousel-mates', 6, 'Mates', 'producto-mates', 'foto mate', '.contenedor-carousel-mates', 'flecha-izquierda-mates', 'flecha-derecha-mates', '#indicadores-mates', '.producto-mates');

/* Sets */
const CREATE_CAROUSEL_SETS = createCarouselByCategory('carousel-sets', 15, 'Sets', 'producto-sets', 'foto set', '.contenedor-carousel-sets', 'flecha-izquierda-sets', 'flecha-derecha-sets', '#indicadores-sets', '.producto-sets');

/* Macetas */
const CREATE_CAROUSEL_MACETAS = createCarouselByCategory('carousel-macetas', 8, 'Macetas', 'producto-macetas', 'foto maceta', '.contenedor-carousel-macetas', 'flecha-izquierda-macetas', 'flecha-derecha-macetas', '#indicadores-macetas', '.producto-macetas');

/* Cuadros */
const CREATE_CAROUSEL_CUADROS = createCarouselByCategory('carousel-cuadros', 7, 'Cuadros', 'producto-cuadros', 'foto cuadro', '.contenedor-carousel-cuadros', 'flecha-izquierda-cuadros', 'flecha-derecha-cuadros', '#indicadores-cuadros', '.producto-cuadros');

/* Imanes */
const CREATE_CAROUSEL_IMANES = createCarouselByCategory('carousel-imanes', 6, 'Imanes', 'producto-imanes', 'foto imanes', '.contenedor-carousel-imanes', 'flecha-izquierda-imanes', 'flecha-derecha-imanes', '#indicadores-imanes', '.producto-imanes');

/* Cartucheras y neceser */
const CREATE_CAROUSEL_CARTUCHERAS = createCarouselByCategory('carousel-cartucheras', 15, 'Cartuchera neceser', 'producto-cartucheras', 'foto cartuchera o neceser', '.contenedor-carousel-cartucheras', 'flecha-izquierda-cartucheras', 'flecha-derecha-cartucheras', '#indicadores-cartucheras', '.producto-cartucheras');

/* Otros productos */
const CREATE_CAROUSEL_OTROS = createCarouselByCategory('carousel-otros', 15, 'Otros', 'producto-otros', 'foto otros productos', '.contenedor-carousel-otros', 'flecha-izquierda-otros', 'flecha-derecha-otros', '#indicadores-otros', '.producto-otros');