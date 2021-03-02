const imagen = document.getElementById('destacados')

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try{
        const res = await fetch('https://www.etnassoft.com/api/v1/get/?any_tags=[html,css,javascript]&order=newest')
        const data = await res.json()
        libros(data)
        formularioCliente(data)
        
    }catch (error){
        console.log(error)
    }
}

const libros = data =>{
    let cards = ''
    data.forEach(item => {
        cards = `
        <div class="card-1">
        <div class="card-image">
            <img src= ${data[0].cover} width="150px" height="200px" alt="">
        </div>
        <div class="card-title">
            <h2>${data[0].title}</h2>
            <p>${data[0].author}</p>
        </div>
        </div>
        <div class="card-icon-heart">
            <p>Añadir a favoritos</p>
            <img src="icons/heart-solid.svg" alt="icono">
        </div>
        `
    })
    imagen.innerHTML = cards
}


const url = 'https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed';

fetch(url)
.then(response => response.json() )
.then(data => {

    let imagen = document.getElementById('novedades')
    imagen.innerHTML = `
    <div class="card-1">
    <div class="card-image">
        <img src= ${data[0].cover} width="150px" height="200px" alt="">
    </div>
    <div class="card-title">
        <h2>${data[0].title}</h2>
        <p>${data[0].author}</p>
    </div>
    </div>
    <div class="card-icon-heart">
        <p>Añadir a favoritos</p>
        <img src="icons/heart-solid.svg" alt="icono">
    </div>

    <div class="card-2">
    <div class="card-image">
        <img src= ${data[1].cover} width="150px" height="200px" alt="">
    </div>
    <div class="card-title">
        <h2>${data[1].title}</h2>
        <p>${data[1].author}</p>
    </div>

    </div>
    <div class="card-icon-heart">
        <p>Añadir a favoritos</p>
        <img src="icons/heart-solid.svg" alt="icono">
    </div>

    <div class="card-3">
    <div class="card-image">
        <img src= ${data[2].cover} width="150px" height="200px" alt="">
    </div>
    <div class="card-title">
        <h2>${data[2].title}</h2>
        <p>${data[2].author}</p>
    </div>

    </div>
    <div class="card-icon-heart">
        <p>Añadir a favoritos</p>
        <img src="icons/heart-solid.svg" alt="icono">
    </div>

    <div class="card-4">
    <div class="card-image">
        <img src= ${data[3].cover} width="150px" height="200px" alt="">
    </div>
    <div class="card-title">
        <h2>${data[3].title}</h2>
        <p>${data[3].author}</p>
    </div>

    </div>
    <div class="card-icon-heart">
        <p>Añadir a favoritos</p>
        <img src="icons/heart-solid.svg" alt="icono">
    </div>
    ` 
    console.log(data)
    })

.catch(err => console.log(err))
