const libros = document.getElementById('libros')
const items = document.getElementById('items')
const fragment = document.createDocumentFragment()
const templateCard = document.getElementById('templateCard')
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
let carrito = {}


document.addEventListener("DOMContentLoaded", e =>{
    fetchData()
})

libros.addEventListener('click', e =>{
    addCarrito(e)
})


const fetchData = async () => {
    try {
        const res = await fetch('https://www.etnassoft.com/api/v1/get/?category=libros_programacion&num_items=50')
        const data = await res.json()
        const filtroData = data.filter(item => item.title === params)
        librillos(filtroData)
    } catch (error) {
        console.log(error)
    }
}


const librillos = (data) => {
    let elementos = ''
    data.forEach(item => {
        elementos += `
        
    <article class="card-central">
        <div class="imgBox">
            <img src=${item.cover} alt="" class="">
            <img src=${item.cover} alt="" class="">
        </div>
        <div class="card-details">
            <h5 style="font-size: 10px">${item.title}</h5>
            <h6>${item.content_short}</h6>
            <p class="pages">
                <b>pages: </b>
                ${item.pages}
            </p>
            <p class="lenguage">
                <b>lenguage: </b>
                ${item.language}
            </p>
            <p class="anio">
                <b>Año: </b>
                ${item.publisher_date}
            </p>
        </div>
        <section class="container filter-content my-2"> 
        <div class="button-container2"  id="templateCard">
            <a class="button-liquid2" href="#">
                <samp class="button-text2">Agregar a favoritos</samp>
                <div class="liquid2"></div>
            </a>
        </div>
        </section>
    </article>
                `
            })
    libros.innerHTML = elementos
}

const addCarrito = e => {
    
    if(e.target.classList.contains('button-text2')){
        setCarrito(e.target.parentElement.parentElement.parentElement.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    const producto = {
        img: objeto.querySelector('img').src,
        title: objeto.querySelector('h5').textContent,
        pages: objeto.querySelector('.pages').textContent,
        lenguage: objeto.querySelector('.lenguage').textContent,
        año: objeto.querySelector('.anio').textContent,
        cantidad: 1
    }

    if(carrito.hasOwnProperty(producto.title)){
        producto.cantidad = carrito[producto.title].cantidad + 1
    }

    carrito[producto.title] = {...producto}

    pintarCarrito()
}

const pintarCarrito = () => {
    items.innerHTML = ''

    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('img').src = producto.img
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelectorAll('td')[2].textContent = producto.lenguage
        templateCarrito.querySelector('span').textContent = producto.año
        
        //botones
        

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()
}

const pintarFooter = () => {
    footer.innerHTML = ''
    
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Vacío Elige uno</th>
        `
        return
    }
    
    // sumar cantidad y sumar totales
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
    // console.log(nPrecio)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })

}

