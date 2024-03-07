"use strict";

var mobileMenu = document.querySelector('.mobile-menu');
var header = document.querySelector('.header');
debugger;
var links = {
  products: document.querySelector('#products'),
  sellers: document.querySelector('#sellers'),
  earphones: document.querySelector('#earphones'),
  launches: document.querySelector('#launches')
};
document.querySelector('.menu_button').addEventListener('click', function (event) {
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('visible');
});
mobileMenu.querySelector('.mobile-menu__close').addEventListener('click', function (event) {
  mobileMenu.classList.remove('visible');
  mobileMenu.classList.add('hidden');
});

function scrollToSection(event) {
  var classes = event.target.className; // console.log(classes.includes('menu-link'))

  if (classes.includes('menu-link')) {
    var content = event.target.innerText;

    switch (content) {
      case 'Features':
        console.log("Features");
        links.products.scrollIntoView();

      case 'Sellers':
        links.sellers.scrollIntoView();

      case 'Earphones':
        links.earphones.scrollIntoView();

      case 'Launches':
        links.launches.scrollIntoView();
    }
  }
}

mobileMenu.addEventListener('click', scrollToSection);
header.addEventListener('click', scrollToSection);