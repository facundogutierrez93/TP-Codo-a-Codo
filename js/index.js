const PORTADA_BTN = document.getElementById('boton-portada')
const ELEMENT = document.querySelector('#categoria-productos')
PORTADA_BTN.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()

    const TOP_ANCHOR = ELEMENT.getBoundingClientRect().top - 80
    window.scrollTo({
        top: TOP_ANCHOR,
        behavior: 'smooth',
    })
});

const PRODUCT_CARD = document.querySelectorAll('.product-card')
PRODUCT_CARD.forEach((card) => {
    card.addEventListener('click', (e) => {
        const CARD_ID = card.id
        const URL_ID = `products.html#${CARD_ID}`
        window.location.href = URL_ID
    })
});