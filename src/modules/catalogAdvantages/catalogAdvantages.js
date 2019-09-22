import initSlider from '../../js/initSlider';

initSlider('.catalogAdvantages', {
  slidesPerView: 1,
  // spaceBetween:  20,
  loop:          true,
  wrapperClass:  'catalogAdvantages__items',
  slideClass:    'catalogAdvantages__item',
  navigation:    {
    prevEl: '.catalogAdvantages__button--prev',
    nextEl: '.catalogAdvantages__button--next',
  },
});