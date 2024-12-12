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

//toogle class active untuk shopping cart
const shoppingcart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = () => {
  shoppingcart.classList.toggle('active');
  e.preventDefault();
}

// Klik di luar sidebar untuk menghilangkan nav
const tnm = document.querySelector('#tanaman-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener("click", function (e) {
  if (!tnm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove('active');
    }

  if (!sc.contains(e.target) && !shoppingcart.contains(e.target)) {
    shoppingcart.classList.remove("active");
    }
});


// Modal box

const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});


// Klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal 
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};