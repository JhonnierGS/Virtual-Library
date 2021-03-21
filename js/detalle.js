const libros = document.getElementById('libros')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)

document.addEventListener("DOMContentLoaded", e =>{
    fetchData()
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
            <h6>${item.content_short}</h6>
            <p>
                <b>pages: </b>
                ${item.pages}
            </p>
            <p>
                <b>lenguage: </b>
                ${item.language}
            </p>
            <p>
                <b>Año: </b>
                ${item.publisher_date}
            </p>
        </div>
    </article>
                `
    })
    libros.innerHTML = elementos
}