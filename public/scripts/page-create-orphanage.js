// create map
const map = L.map('mapid').setView([-25.4537382,-49.2778771], 13);

// create and add tailelAyer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// create and add markers
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remover icon
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photo field
function addPhotoField(){
    
    // get photos container #images
    const container = document.querySelector('#images');

    // get container to duplicate .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // make last added image clone
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verify if is empty
    const input = newFieldContainer.children[0];
    
    if(input.value == ""){
        return
    }

    // clear field
    input.value = "";
    
    // add the clone into the #images container
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2) {

        // clear value
        span.parentNode.children[0].value = ""

        return
    }

    // remove field
    span.parentNode.remove();
}

// select yes or no 
function toggleSelect(event){
    
    // remove class .active
    document.querySelectorAll('.button-select button').forEach((button) => button.classList.remove('active'));

    // set class .active
    const button = event.currentTarget
    button.classList.add('active');

    // get the button clicked

    // update input hidden 
    const input = document.querySelector('[name="open_on_weekends"]');
    
    // verify yes or no
    input.value = button.dataset.value
   
}

function validate(event) {

    // validar se lat e lng estao preenchidos
    const lat = document.querySelector('[name="lat"]');
    const lng = document.querySelector('[name="lng"]');

    if (lat.value == "" || lng.value == "") {
        alert('Selecione um ponto no mapa')
        event.preventDefault();
    }
    
}