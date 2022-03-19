const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    mousewheel: true,
    preventClicksPropagation: false,
    speed: 900,
    allowTouchMove: true,
    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      }
    }
});
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu-list'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    hamburger = document.querySelector('.hamburger');
    btn = document.querySelector('.btn_top');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu-list_active');
        btn.classList.toggle('btn_top_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu-list_active');
            btn.classList.toggle('btn_top_active');
        });
    });
    btn.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('header__menu-list_active');
      btn.classList.toggle('btn_top_active');
  });
});