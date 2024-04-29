// window.addEventListener('scroll', function() {
//     var header = document.getElementById('header');
//     if (window.scrollY > 0) {
//         header.classList.add('fixed');
//     } else {
//         header.classList.remove('fixed');
//     }
// });
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             const topOffset = document.getElementById('header').offsetHeight; // Учитываем высоту фиксированного меню
//             window.scrollTo({
//                 top: target.offsetTop - topOffset,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".menu_link").classList.toggle("active")
    document.querySelector("body").classList.toggle("active")
})