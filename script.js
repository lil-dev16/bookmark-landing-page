const bar = document.querySelector('.hamburger');
const menu = document.querySelector('.right');
   bar.addEventListener('click', ()=> {
    menu.classList.toggle('show');
    
   })