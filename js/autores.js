const url = 'https://www.etnassoft.com/api/v1/get/?book_author=paenza';

fetch(url)
.then(response => response.json() )
.then(data => {
    let imagen = document.getElementById('paenza')
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
        <a href="">Ver libros</a>
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
        <a href="">Ver libros</a>
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
        <a href="">Ver libros</a>

    </div>

    <div class="card-4">
    <div class="card-image">
        <img src= ${data[4].cover} width="150px" height="200px" alt="">
    </div>
    <div class="card-title">
        <h2>${data[4].title}</h2>
        <p>${data[4].author}</p>
    </div>
    </div>
    <div class="card-icon-heart">
        <a href="">Ver libros</a>
        
    </div>
    ` 
    console.log(data)
    })

.catch(err => console.log(err))

const url2 = 'https://www.etnassoft.com/api/v1/get/?book_author=ana';

fetch(url2)
.then(response => response.json() )
.then(data => {
    let autor = document.getElementById('autores')
    autor.innerHTML = `
    <div class="card-1">
    <div class="card-image">
        <img src= ${data[5].cover} width="150px" height="200px" alt="">
    </div>
    <div class="card-title">
        <h2>${data[5].title}</h2>
        <p>${data[5].author}</p>
    </div>
    </div>
    <div class="card-icon-heart">
        <a href="">Ver libros</a>
    </div>

    <div class="card-2">
    <div class="card-image">
        <img src= ${data[6].cover} width="150px" height="200px" alt="">
    </div>
    <div class="card-title">
        <h2>${data[6].title}</h2>
        <p>${data[6].author}</p>
    </div>
    </div>
    <div class="card-icon-heart">
        <a href="">Ver libros</a>
    </div>

    <div class="card-3">
    <div class="card-image">
        <img src= ${data[7].cover} width="150px" height="200px" alt="">
    </div>
    <div class="card-title">
        <h2>${data[7].title}</h2>
        <p>${data[7].author}</p>
    </div>
    </div>
    <div class="card-icon-heart">
        <a href="">Ver libros</a>
    </div>

    <div class="card-4">
    <div class="card-image">
        <img src= ${data[8].cover} width="150px" height="200px" alt="">
    </div>
    <div class="card-title">
        <h2>${data[8].title}</h2>
        <p>${data[8].author}</p>
    </div>
    </div>
    <div class="card-icon-heart">
        <a href="">Ver libros</a>
    </div>

    
    ` 
    console.log(data)
    })

.catch(err => console.log(err))