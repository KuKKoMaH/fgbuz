import Swiper from 'swiper';

// const minSize = 291;
// const maxSize = 412;

// const interpolate = (from, to, value) => from + (value * (to - from));
const interpolate = (x, x1, y1, x2, y2) => y1 + ((x - x1) / (x2 - x1) * (y2 - y1));

const slider = new Swiper('.about__slider', {
  slidesPerView:       1,
  spaceBetween:        0,
  wrapperClass:        'about__slides',
  slideClass:          'about__slide',
  pagination: {
    el: '.about__pagination',
    type: 'fraction',
  },
  navigation: {
    prevEl: '.about__button--prev',
    nextEl: '.about__button--next',
  },
  grabCursor:          true,
  watchSlidesProgress: true,
  on:                  {
    progress:      function () {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        var slideProgress = swiper.slides[i].progress;
        const progress    = 1 + slideProgress;
        const style       = swiper.slides[i].style;
        if (progress >= 1.5) {
          style.opacity = 0;
        } else if (progress > 1) {
          style.opacity = interpolate(progress, 1, 1, 1.5, 0);
        } else {
          const labelStyle     = swiper.slides[i].querySelector('.about__label').style;
          const buttonStyle    = swiper.slides[i].querySelector('.about__link').style;
          style.opacity        = 1;
          style.transform      = `scale(${interpolate(progress, 0, .5, 1, 1)})`;
          labelStyle.transform = `scale(${interpolate(progress, 0, 0, 1, 1)})`;
          buttonStyle.opacity  = interpolate(progress, 0, 0, 1, 1);
        }
      }
    },
    touchStart:    function () {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
    setTransition: function (speed) {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition                                 = speed + "ms";
        swiper.slides[i].querySelector('.about__label').style.transition  = speed + "ms";
        swiper.slides[i].querySelector('.about__link').style.transition = speed + "ms";
      }
    }
  }
});

slider.update();

