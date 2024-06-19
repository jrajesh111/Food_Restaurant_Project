let menu = document.getElementById('menu-bars'); // Corrected selector to use getElementById
let navbar = document.querySelector('.navbar'); // Corrected selector to use class selector

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    sections.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
};

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
};

// Initialize Swiper for home-slider
var homeSwiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

// Initialize Swiper for review-slider
var reviewSwiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut;















// let menu = document.getElementById('menu-bars'); // Corrected selector to use getElementById
// let navbar = document.querySelector('.navbar'); // Corrected selector to use class selector

// menu.onclick = () => {
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }
// let section = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header .navbar a');
// window.onscroll = () => {
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
//     section.forEach(sec => {
//         let top = window.scrollY;
//         let height = sec.offsetHeight;
//         let offset = sec.offsetTop - 150;
//         let id = sec.getAttribute('id');

//         if(top => offset && top < offset + height){
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
//             });
//         };
//     });
// }

// document.querySelector('#search-icon').onclick = ()=>{
//     document.querySelector('#search-form').classList.toggle('active');
// }

// document.querySelector('#close').onclick = ()=>{
//     document.querySelector('#search-form').classList.remove('active');
// }

// // Initialize Swiper for home-slider
// var homeSwiper = new Swiper(".home-slider", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     loop: true,
// });

// // Initialize Swiper for review-slider
// var reviewSwiper = new Swiper(".review-slider", {
//     spaceBetween: 20,
//     centeredSlides: true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     loop: true,
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         640: {
//             slidesPerView: 2,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         }
//     }
// });
// function loader(){
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut()
// {
//     setInterval(loader,3000);
// }
// window.onload = fadeOut;
















// var swiper = new Swiper(".home-slider", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     loop: true,
// });

// var swiper = new Swiper(".review-slider", {
//     spaceBetween: 20,
//     centeredSlides: true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     loop: true,
//     breakpoints:{
//         0:{
//             slidesPerView:1,
//         },
//         640: {
//             slidesPerView:2,
//         },
//         768:{
//             slidesPerView:2,
//         },
//         1024:{
//             slidesPerView:3,
//         }
//     }
// });
