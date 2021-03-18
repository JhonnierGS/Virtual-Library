const libros = document.getElementById('libros')

document.addEventListener("DOMContentLoaded", e =>{
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://www.etnassoft.com/api/v1/get/?num_items=50')
        const data = await res.json()
        librillos(data)
        formularioCliente(data)
        filtros(data)
    } catch (error) {
        console.log(error)
    }
}


const librillos = (data) => {

    let elementos = ''

    data.forEach(item => {
        elementos += `
        <article class="card">
        <img src=${item.cover} alt="" class="img-fluid">
        <div class="cards-content">
            <h3>${item.title}</h3>
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




