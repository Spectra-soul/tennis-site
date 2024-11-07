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
let images = ["./assets/img/tennis-banner1.png", "./assets/img/pickle-banner1.png", "./assets/img/tennis-banner2.png", "./assets/img/pickle-banner2.png"]; // Add paths to your images here
let currentIndex = 0;
const carouselImage = document.querySelector('.carousel-image');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.src = images[currentIndex];
}

setInterval(changeImage, 3000); // Change image every 3 seconds
