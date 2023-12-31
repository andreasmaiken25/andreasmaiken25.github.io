// Animation Hamburger
var hamburger = document.getElementById("hamburger");

hamburger.onclick = function () {
  hamburger.classList.toggle("openmenu");
};

// Sticky Navbar
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// Like Catalog
$(document).ready(function() {
  $(".love").click(function(){
    $(".love1").toggleClass("love-active")
  });
});