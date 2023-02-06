let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance:'65px',
    duration:2600,
    delay:450,
    reset:true
})
sr.reveal('.text',{delay:200,origin:'top'});
sr.reveal('.main-img',{delay:200,origin:'top'});