var swiper1 = new Swiper('.swiper-container.cases_swiper-container', {
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 6,
    }
  },
});