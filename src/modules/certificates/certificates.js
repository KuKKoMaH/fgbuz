import initGallery from '../../js/initGallery';
import initSlider  from '../../js/initSlider';

initGallery({
  $items: $('.certificates__item')
});

initSlider('.certificates__slider', {
  slidesPerView: 'auto',
  spaceBetween:  20,
  loop:          true,
  wrapperClass:  'certificates__items',
  slideClass:    'certificates__item',
  navigation:    {
    prevEl: '.certificates__button--prev',
    nextEl: '.certificates__button--next',
  },
}, { sm: true, md: true });