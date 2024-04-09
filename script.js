var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tablink of tabcontent) {
    tablink.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


// active
// Get the container element
var btnContainer = document.getElementById("sidemenu");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("mbtn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


//menu
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

var typed = new Typed(".text", {
  strings: ["Full Stack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});


//scroll

window.addEventListener("scroll", function() {
  var header = document.getElementById("header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
window.addEventListener("scroll", function() {
  var logo = document.getElementById("logo");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    logo.classList.add("scrolled");
  } else {
    logo.classList.remove("scrolled");
  }
});



// Add certificate slide 

let slideIndex = 1;
showSlides(slideIndex);

//nxt and pre
function plushSlides(n){
  showSlides(slideIndex += n);
}

// thumnail image control
function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if(n > slides.length){
    slideIndex = 1
  }
  if(n < 1){
    slideIndex = slides.length
  }
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}