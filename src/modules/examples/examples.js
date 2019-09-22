import initGallery from '../../js/initGallery';
import initSlider  from '../../js/initSlider';

initGallery({
  $items: $('.examples__item')
});

initSlider('.examples__slider', {
  slidesPerView: 1,
  spaceBetween:  20,
  loop:          true,
  wrapperClass:  'examples__items',
  slideClass:    'examples__grid',
  navigation:    {
    prevEl: '.examples__button--prev',
    nextEl: '.examples__button--next',
  },
}, { sm: true, md: true });
