import Breakpoints  from 'breakpoints-js';
import SmoothScroll from 'smooth-scroll';
import initSlider   from './initSlider';

Breakpoints({
  sm: {
    min: 0,
    max: 767,
  },
  md: {
    min: 768,
    max: 1229,
  },
  lg: {
    min: 1230,
    max: Infinity,
  },
});

$('.select').selectize({ maxItems: 1 });

$('input[type="tel"]').mask("+7 (999) 999-99-99");

window.smoothscroll = new SmoothScroll('a[href*="#"]', { header: '.header__container' });

initSlider('.slider', ( $el ) => ({
  slidesPerView: 1,
  spaceBetween:  0,
  autoHeight:    true,
  loop:          true,
  wrapperClass:  'slider__items',
  slideClass:    'slider__item',
  navigation:    {
    prevEl: $el.find('.arrowButton--left')[0],
    nextEl: $el.find('.arrowButton--right')[0],
  },
}), { sm: true, md: true, lg: true });

$('.youtube').on('click', ( e ) => {
  const $el = $(e.currentTarget);
  if ($el.data('loaded')) return;
  $el.data('loaded', true);
  $el.append('<iframe src="' + $el.data('url') + '"></iframe>');
});

$('table').each(( i, table ) => {
  const $table = $(table);
  const headers = [];
  $table.find('thead th').each(( i, th ) => {
    headers.push(th.innerText);
  });
  $table.find('tbody tr').each(( i, tr ) => {
    const $tr = $(tr);
    $tr.find('td').each(( i, td ) => {
      $(td).attr('data-title', headers[i]);
    });
  });
});

