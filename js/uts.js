// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#tanaman-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//toogle class acrive untuk search form
const searchform = document.querySelector('.search-form');
const searchbox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchform.classList.toggle('active');
  searchbox.focus();
  e.preventDefault();
};

// Klik di luar sidebar untuk menghilangkan nav
const tnm = document.querySelector('#tanaman-menu');
const sb = document.querySelector('#search-button');

document.addEventListener("click", function (e) {
  if (!tnm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove('active');
    }
});