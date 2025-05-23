//Toggle class active hamburger
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
navbarNav.classList.toggle('active');
};

// toggle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// toggle class active keranjang
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = () => {
  shoppingCart.classList.toggle('active');
};

//klik diluar sidebar 
const hm =document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');
document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)){
        shoppingCart.classList.remove('active');
    }
});


// modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
            itemDetailModal.style.display = 'flex';
            e.preventDefault();
        };
});

// click tombol close
document.querySelector('.modal .close').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

// klik diluar modal
window.onclick = (e) => {
    if(e.target == itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
};
