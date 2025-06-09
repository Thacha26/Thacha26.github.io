new Swiper(".mySwiper-1", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

new Swiper(".mySwiper-2", {
  loop: true,
  navigation: {
    nextEl: ".mySwiper-2 .swiper-button-next",
    prevEl: ".mySwiper-2 .swiper-button-prev",
  },
});
