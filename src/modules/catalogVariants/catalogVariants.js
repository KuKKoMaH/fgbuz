import initSlider from '../../js/initSlider';

initSlider('.catalogVariants', {
  slidesPerView: 1,
  spaceBetween:  20,
  loop:          true,
  wrapperClass:  'catalogVariants__items',
  slideClass:    'catalogVariants__item',
  navigation:    {
    prevEl: '.catalogVariants__button--prev',
    nextEl: '.catalogVariants__button--next',
  },
});