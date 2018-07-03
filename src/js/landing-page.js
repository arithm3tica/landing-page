const LandingPage = (function() {
    const hero = document.getElementById('hero');

    // nav
    const mainNav = document.getElementById('main-nav');
    const menuContainer = document.getElementById('menu-container');
    const openMenuBtn = document.getElementById('open-menu-button');
    const closeMenuBtn = document.getElementById('close-menu-button');
    const mobileMenuMask = document.getElementById('mobile-menu-mask');

    // mobile menu
    openMenuBtn.addEventListener('click', function() {
        menuContainer.classList.add('open');
    });
    closeMenuBtn.addEventListener('click', function() {
        menuContainer.classList.remove('open');
    });
    mobileMenuMask.addEventListener('click', function() {
        menuContainer.classList.remove('open');
    })

    // sticky nav 
    window.addEventListener('touchmove', stickyNav);
    window.addEventListener('scroll', stickyNav)

    function stickyNav() {
        if (hero.getBoundingClientRect().top <= -1) {
            mainNav.classList.add('sticky-nav');
        } else {
            mainNav.classList.remove('sticky-nav');
        }
    }

    // team portraits
    const portraits = document.querySelectorAll('#team .portrait');

    for (let portrait of portraits) {
        portrait.style.backgroundImage = 'url(images/' + portrait.dataset.bg + ')';
    }

})();