import initSlider from './initSlider';

initSlider('.cardsList__slider', {
  slidesPerView: 'auto',
  spaceBetween:  32,
  wrapperClass:  'cardsList__items',
  slideClass:    'cardsList__slide',
  navigation: {
    nextEl: '.cardsList__arrow',
    // prevEl: '.swiper-button-prev',
  },
});
