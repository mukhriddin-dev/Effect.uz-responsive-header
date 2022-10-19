const acc = document.querySelectorAll(".accardion");
const isc = document.querySelector('#ics');
const menus=document.querySelector('.menu');
const navMenu=document.querySelector('.nav-menu--ul');

acc.forEach(item => {
    item.addEventListener('click', () => {
        acc[0].classList.toggle("bdrr");
        isc.classList.toggle('rot')
        const panel = item.nextElementSibling
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.border = "none";
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            panel.style.border = "0.2px solid rgba(177, 175, 175, 0.615)"
        }
    })
})


menus.addEventListener('click',()=>{
navMenu.classList.toggle('slidehide');
})