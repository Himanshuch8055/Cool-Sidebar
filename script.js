const menu = document.querySelector('#menu');
const background = document.querySelector('#background');
const sidenav = document.querySelector('#sidenav');
const closeelme = document.querySelector('#close');

closeelme.addEventListener('click', function () {
    background.style.transform = 'translateX(0px) scale(1)';
    background.style.filter = 'blur(0px)';
    sidenav.style.left = '-20%';
})

menu.addEventListener('click', function () {
    background.style.transform = 'translateX(200px) scale(.9) rotateY(-10deg) skewY(0deg)';
    background.style.filter = 'blur(1.5px)';
    sidenav.style.left = '5%';
})
