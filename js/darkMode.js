const btnDark = document.querySelector('.btn-dark-mode');


btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if(document.body.className === 'dark-mode'){
        btnDark.innerHTML = `
        <i class="far fa-sun"></i>
        Light Mode
        `
    }else{
        btnDark.innerHTML = `
        <i class="far fa-moon"></i>
        Dark Mode
        `
    }

    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('dark', 'true')
    }else{
        localStorage.setItem('dark', 'false')
    }
})

if(localStorage.getItem('dark') === 'true'){
    document.body.classList.add('dark-mode');
    btnDark.innerHTML = `
        <i class="far fa-sun"></i>
        Light Mode
        `
}else{
    document.body.classList.remove('dark-mode');
    btnDark.innerHTML = `
        <i class="far fa-moon"></i>
        Dark Mode
        `
}