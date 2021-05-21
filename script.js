AOS.init();
const btn=document.querySelector('.burgar');
const navlinks=document.querySelector('.navbar-links');
const navbar=document.querySelector('.navigation');
btn.addEventListener('click',()=>{
    btn.classList.toggle('toggle')
    navlinks.classList.toggle('show-nav')
})


