const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// create map
const map = L.map('mapid', options).setView([lat,lng], 13);

// create and add tailelAyer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popAnchor: [170, 2]
})

// create and add marker
L
.marker([lat,lng], { icon })
.addTo(map)

/* Image gallery */
function selectImage(event) {
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    // selecionar a imagem clicada
    const image = button.children[0]
    const imagecontainer = document.querySelector(".orphanage-details > img")

    // atualizar o container da imagem
    imagecontainer.src = image.src

    // adicionar a classe .active para este botao clicado
    button.classList.add('active');
}

function alertCovid() {
    alert("Devido às restrições do COVID-19 solicitamos que caso você traga alguma ajuda informe no contato. Obrigado!");
    
    // ES6 Modules or TypeScript
    //import Swal from 'sweetalert2'

    // CommonJS
    /*const Swal = require('sweetalert2')
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })*/
}