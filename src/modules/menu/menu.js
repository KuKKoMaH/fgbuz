const $menu      = $('.menu');
const $hamburger = $menu.find('.hamburger');
let opened       = false;

$('.menu__button').on('click', () => {
  opened ? close() : open();
});

const open = () => {
  $menu.addClass('menu--active');
  $hamburger.addClass('hamburger--active');
  $(document).on('click', onClickOutside);
  opened = true;
};

const close = () => {
  $menu.removeClass('menu--active');
  $hamburger.removeClass('hamburger--active');
  $(document).off('click', onClickOutside);
  opened = false;
};

const onClickOutside = (e) => {
  if (!$(e.target).closest($menu).length) {
    close();
  }
};
