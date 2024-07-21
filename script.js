document.addEventListener("DOMContentLoaded", () => {
  // function myFunction() {
  //   var x = document.getElementById("myTopnav");
  //   if (x.className === "topnav") {
  //     x.className += " responsive";
  //   } else {
  //     x.className = "topnav";
  //   }
  // }


  const burger = document.querySelector('.burger');
  const navList = document.querySelector('.navList');
  // const close = document.querySelector(".close");

  const subscriptionButton = document.querySelector('.subscription-btn');
  const subscriptionForm = document.querySelector('.subscription-container');
  const closeButton = document.querySelector('.close-btn');

  subscriptionButton.addEventListener('click', () => {
    subscriptionForm.style.display = "block";
  });
  closeButton.addEventListener('click', () => {
    subscriptionForm.style.display = 'none';
  });

  burger.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
  // close.addEventListener("click", () => {
  //   close.style.display = "none";
  // });

  var slideIndex = 0;
  carousel();

  function carousel() {
    var i;
    var y = document.getElementsByClassName("mySlides");
    for (i = 0; i < y.length; i++) {
      y[i].style.display = "none";
    }

    slideIndex++;

    slideIndex > y.length && (slideIndex = 1);
    y[slideIndex - 1].style.display = "block";
  }

  setInterval(function () {
    carousel();
  }, 2 * 1000); // Change image every 2 seconds






  // let currentIndex = 0;
  // const images = document.querySelectorAll('.mySlides');
  // const totalImages = images.length;

  // function NextImage() {
  //   images[currentIndex].classList.remove("active");
  //   currentIndex = (currentIndex + 1) % totalImages;
  //   images[currentIndex].classList.add("active");
  // }
  // setInterval(NextImage, 2000);




});
