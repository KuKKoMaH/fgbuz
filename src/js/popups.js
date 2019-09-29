import baron     from 'baron';
import openPopup from './openPopup';

window.showThank = () => openPopup({ items: { src: '#thank' } });

$('.popup__opener').on('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  openPopup({
    items: { src: $(e.delegateTarget).attr('href') }
  });
  return false;
});

const $now        = $('.popup__now');
const $later      = $('.popup__later');
const $time       = $('.popup__time');
const activeClass = 'btn--active';
$later.on('click', () => {
  $now.removeClass(activeClass);
  $later.addClass(activeClass);
  $time.slideDown();
});

$now.on('click', () => {
  $now.addClass(activeClass);
  $later.removeClass(activeClass);
  $time.slideUp();
});
