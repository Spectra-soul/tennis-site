//Navbar Active Page
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}


// Navbar Toggle for Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Image Carousel
let images = ["./assets/img/banner-1.jpg", "./assets/img/banner-2.jpg", "./assets/img/banner-4.jpg",  "./assets/img/banner-5.jpg", "./assets/img/banner-3.jpg"]; // Add paths to your images here
let currentIndex = 0;
const carouselImage = document.querySelector('.carousel-image');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.src = images[currentIndex];
}

setInterval(changeImage, 3000); // Change image every 3 seconds




// move to top
// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var moveToTopBtn = document.getElementById("moveToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    moveToTopBtn.classList.add("show");
  } else {
    moveToTopBtn.classList.remove("show");
  }
}

// Smooth scroll back to the top
document.getElementById("moveToTopBtn").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// move to top
