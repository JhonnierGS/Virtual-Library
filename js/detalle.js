const libros = document.getElementById('libros')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)

document.addEventListener("DOMContentLoaded", e =>{
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://www.etnassoft.com/api/v1/get/?num_items=50')
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
            <h3>${item.name}</h3>
            <p>
                <b>Author: </b>
                ${item.author}
            </p>
            <p>
                <b>lenguage: </b>
                ${item.language}
            </p>
            <p>
                <b>Año: </b>
                ${item.publisher_date}
            </p>
            <p>
                <b>Categoria: </b>
                ${item.categories[0].name}
            </p>
        </div>
    </article>
                `
    })
    libros.innerHTML = elementos
}