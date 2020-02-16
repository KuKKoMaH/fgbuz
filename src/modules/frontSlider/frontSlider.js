import initSlider from '../../js/initSlider';

initSlider('.frontSlider', {
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          true,
  wrapperClass:  'frontSlider__items',
  slideClass:    'frontSlider__item',
  lazy:          true,
  navigation:    {
    prevEl: $('.frontSlider .arrowButton--left')[0],
    nextEl: $('.frontSlider .arrowButton--right')[0],
  },
}, { sm: true, md: true, lg: true });
