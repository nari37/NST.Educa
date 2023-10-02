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


  // BACKEND...

  document.getElementById('data').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Collect form data...
    const formData = {
      name: this.querySelector('input[name="name"]').value,
      email: this.querySelector('input[name="email"]').value,
      number: this.querySelector('input[name="number"]').value,
      courses: this.querySelector('select[name="courses"]').value,
      gender: this.querySelector('input[name="gender"]:checked').value,
    };

    // Send form data as JSON to the server...
    fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Massege Send Succesfully!')
    // clear from after submit..
     this.reset();

      })
      .catch((error) => {
        console.log(error);
      });
  });

