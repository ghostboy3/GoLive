// window.addEventListener('scroll', () => {
//     const floatingImage = document.getElementById('floating-image');
//     const scrollY = window.scrollY;
//     const introHeight = document.querySelector('.intro').offsetHeight;

//     if (scrollY < introHeight) {
//         floatingImage.style.transform = `translateY(-${scrollY}px)`;
//     } else {
//         floatingImage.style.transform = `translateY(-${introHeight}px)`;
//     }
// });

const menuToggle = document.getElementById('menu-toggle');
const navbarLinks = document.getElementById('navbar-links');

menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
