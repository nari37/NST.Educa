const menubtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .flex .navbar');

const navigationHeight=  navbar.offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "6rem"
)



  
menubtn.onclick = () =>{
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".course-slider", {

    spaceBetween:20,
    grabCursor:true,
    loop:true,
   

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        1024: {
          slidesPerView: 3,
          
        },
      },
  });

  var swiper = new Swiper(".teachers-slider", {

    spaceBetween:20,
    grabCursor:true,
    loop:true,
   

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        1024: {
          slidesPerView: 3,
          
        },
      },
  });

  var swiper = new Swiper(".reviews-slider", {

    spaceBetween:20,
    grabCursor:true,
    loop:true,
   

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        1024: {
          slidesPerView: 3,
          
        },
      },
  });

