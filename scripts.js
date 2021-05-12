function toggleMenu() {
    let navbar = document.querySelector('#nav-bar')
    navbar.classList.toggle('show')
  }

  let scrollPosition = 0;
  const isScrollingDown = () => {
    let currentScrolledPosition = window.scrollY || window.pageYOffset;

    if(currentScrolledPosition > scrollPosition) {
      scrollPosition = currentScrolledPosition;
      return true;
    } 
    else {
      scrollPosition = currentScrolledPosition;
      return false;
    }
  }

  const nav = document.querySelector('nav');
  const handleNavScroll = () => {
    if(isScrollingDown()) {
      nav.classList.add('scroll-down');
      nav.classList.remove('scroll-up');
    }
    else {
      nav.classList.add('scroll-up');
      nav.classList.remove('scroll-down');
    }
  }

  var throttleTimer;
  const throttle = (callback, time) => {
    if(throttleTimer) { return; }

    throttleTimer = true;
    setTimeout(() => {
      callback();
      throttleTimer = false;
    }, time);
  }

  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  window.addEventListener("scroll", () => {
    if(mediaQuery && !mediaQuery.matches) {
      throttle(handleNavScroll, 200)
    }
  });