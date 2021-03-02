const url = 'https://www.etnassoft.com/api/v1/get/?category_id=212';

fetch(url)
.then(response => response.json() )
.then(data => {
    let imagen = document.getElementById('prog')
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

const url2 = 'https://www.etnassoft.com/api/v1/get/?category=Educacion';

fetch(url2)
.then(response => response.json() )
.then(data => {
    let imagen = document.getElementById('educacion')
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

const url3 = 'https://www.etnassoft.com/api/v1/get/?category=datos';

fetch(url3)
.then(response => response.json() )
.then(data => {
    let imagen = document.getElementById('datos')
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