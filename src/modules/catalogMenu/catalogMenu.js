import initSlider  from '../../js/initSlider';

initSlider('.catalogMenu__slider', {
  slidesPerView: 1,
  spaceBetween:  10,
  loop:          true,
  wrapperClass:  'catalogMenu__items',
  slideClass:    'catalogMenu__item',
  navigation:    {
    prevEl: '.catalogMenu__button--prev',
    nextEl: '.catalogMenu__button--next',
  },
}, { sm: true });
