// Animasi saat menggulir ke bawah
window.addEventListener("scroll", function () {
  let navbar = document.querySelector("header");
  if (window.scrollY > 50) {
    navbar.style.background = "#0056b3";
  } else {
    navbar.style.background = "#007BFF";
  }
});
