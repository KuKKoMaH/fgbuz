import initSlider from '../../js/initSlider';

initSlider('.related__slider', {
  slidesPerView: 1,
  spaceBetween:  20,
  loop:          true,
  wrapperClass:  'related__items',
  slideClass:    'related__item',
  navigation:    {
    prevEl: '.related__button--prev',
    nextEl: '.related__button--next',
  },
}, { sm: true, md: true });
