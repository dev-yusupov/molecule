const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-item");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Function for Toggling Classes in this project
function toggleClass(element, className, existingClass) {
  if(element.classList.contains(className)) {
    element.classList.remove(className);
    element.classList.add(existingClass);
  }else{
    element.classList.add(className);
    element.classList.remove(existingClass);
  }
}


hamburger.onclick = function () {
  toggleClass(navItems, 'nav-items-active', 'nav-items');
}