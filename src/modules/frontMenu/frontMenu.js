import initSlider from '../../js/initSlider';

const activeClass = 'frontMenu__block--active';
$('.frontMenu__block--hasChildren').on('click', ( e ) => {
  if ($(e.target).closest('a').length) return;
  const $el = $(e.delegateTarget);
  if ($el.hasClass(activeClass)) {
    $el.find('.frontMenu__submenu').css('height', 0);
  } else {
    $el.find('.frontMenu__submenu').css('height', $el.find('ul').outerHeight(true));
  }
  $el.toggleClass(activeClass);
});

initSlider('.frontMenu__slider', {
  slidesPerView: 4,
  spaceBetween:  30,
  loop:          true,
  wrapperClass:  'frontMenu__items',
  slideClass:    'frontMenu__item',
  lazy:          true,
  navigation:    {
    prevEl: $('.frontMenu__cards .arrowButton--left')[0],
    nextEl: $('.frontMenu__cards .arrowButton--right')[0],
  },
  breakpoints:   {
    1229: {
      slidesPerView: 1,
    },
  },
}, { sm: true, md: true, lg: true });
