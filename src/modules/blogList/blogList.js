import initGallery from '../../js/initGallery';
import initSlider  from '../../js/initSlider';

initSlider('.blogList__slider', {
  slidesPerView: 1,
  spaceBetween:  10,
  loop:          true,
  wrapperClass:  'blogList__images',
  slideClass:    'blogList__image',
  navigation:    {
    prevEl: '.blogList__button--prev',
    nextEl: '.blogList__button--next',
  },
}, { sm: true, md: true });