const btnMenu = document.querySelector('.hamburguer');

function toggleMenu(){
    const nav= document.querySelector('.linksHamburguer')
    nav.classList.toggle('active')
}

const formInput = document.querySelector('.inputForm')

function bordaInput (){
    
}

btnMenu.addEventListener('click',toggleMenu)