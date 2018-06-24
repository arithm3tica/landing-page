'use strict';

var LandingPage = function () {
    var hero = document.getElementById('hero');

    // nav
    var mainNav = document.getElementById('main-nav');
    var menuContainer = document.getElementById('menu-container');
    var openMenuBtn = document.getElementById('open-menu-button');
    var closeMenuBtn = document.getElementById('close-menu-button');
    var mobileMenuMask = document.getElementById('mobile-menu-mask');

    // mobile menu
    openMenuBtn.addEventListener('click', function () {
        menuContainer.classList.add('open');
    });
    closeMenuBtn.addEventListener('click', function () {
        menuContainer.classList.remove('open');
    });
    mobileMenuMask.addEventListener('click', function () {
        menuContainer.classList.remove('open');
    });

    // sticky nav 
    window.addEventListener('touchmove', stickyNav);
    window.addEventListener('scroll', stickyNav);

    function stickyNav() {
        if (hero.getBoundingClientRect().top <= -1) {
            mainNav.classList.add('sticky-nav');
        } else {
            mainNav.classList.remove('sticky-nav');
        }
    }
}();