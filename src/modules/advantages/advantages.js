import initSlider from '../../js/initSlider';

initSlider('.advantages__slider', {
  slidesPerView: 1,
  spaceBetween:  20,
  loop:          true,
  wrapperClass:  'advantages__items',
  slideClass:    'advantages__item',
  navigation:    {
    prevEl: '.advantages__button--prev',
    nextEl: '.advantages__button--next',
  },
});