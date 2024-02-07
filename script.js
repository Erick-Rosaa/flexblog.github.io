const menu = document.querySelectorAll('a[href^="#"]');

function menuSuave(event){
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

menu.forEach((itens)=>{
    itens.addEventListener('click', menuSuave)
})