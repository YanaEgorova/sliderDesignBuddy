var swiper = new Swiper('.swiper-object .swiper-container', {
  // autoplay: true,
  // slidesPerView: 1,
  loop: true,
  grabCursor: true,
  // autoplay: {
  //   delay: 5000,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 350,
    },
    1700: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  }
});