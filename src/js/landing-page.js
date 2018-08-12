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

    // demo video
    const demoVideoModal = document.getElementById('demo-video-modal');
    const youtubeAPI = document.createElement('script');
    youtubeAPI.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(youtubeAPI, firstScriptTag);

    let demoVideoPlayer;
    window.onYouTubeIframeAPIReady = () => {
        demoVideoPlayer = new YT.Player('demo-video', {
            width: '1280',
            height: '720',
            videoId: 'qc_T5NhzoSQ'
        });
    }
    demoVideoModal.addEventListener('modal-open', () => demoVideoPlayer.playVideo());
    demoVideoModal.addEventListener('modal-close', () => demoVideoPlayer.stopVideo());

    // team portraits
    // const portraits = document.querySelectorAll('#team .portrait');

    // for (let portrait of portraits) {
    //     portrait.style.backgroundImage = 'url(images/' + portrait.dataset.bg + ')';
    // }

})();