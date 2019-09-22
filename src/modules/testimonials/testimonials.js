import Swiper from 'swiper';

const $slider = $('.testimonials__slider');
if ($slider.length) {
  const slider = new Swiper($slider[0], {
    slidesPerView:       1,
    loop:                true,
    autoHeight:          true,
    spaceBetween:        0,
    wrapperClass:        'testimonials__slides',
    slideClass:          'testimonials__slide',
    navigation:          {
      prevEl: '.testimonials__button--prev',
      nextEl: '.testimonials__button--next',
    },
    grabCursor:          true,
    watchSlidesProgress: true,
  });

  slider.update();
}
