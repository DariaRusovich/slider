const sliderMain = new Swiper('.slider__main', {
  freeMode: true,
  centeredSlides: true,
  mousewheel: true,
  parallax: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 3.5,
      spaceBetween: 60,
    },
  },
});
const sliderBg = new Swiper('.slider__bg', {
  centeredSlides: true,
  parallax: true,
  slidesPerView: 3.5,
  spaceBetween: 60,
});
sliderMain.controller.control = sliderBg;
console.log(sliderMain.controller);
