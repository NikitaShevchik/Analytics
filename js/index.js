"use strict"

const hamburgerIcon = document.querySelector('.header__hamburger');
const menuBurger = document.querySelector('.burger');

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('_cross')
    menuBurger.classList.toggle('_open')
    document.body.classList.toggle('_block')
})