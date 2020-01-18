const $menu = $('.menu');
const $hamburger = $menu.find('.hamburger');
const $container = $('.catalog__container');
const $document = $(document);
let opened = false;
if ($menu.length) {
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


  let menuOffsetTop;
  let containerOffsetBottom;
  let menuHeight;
  const HEADER_FIXED_TOP = 100;
  const updateMenuSizes = () => {
    menuOffsetTop = $menu.offset().top;
    menuHeight = $menu.outerHeight();
    containerOffsetBottom = $container.offset().top + $container.outerHeight();
  };
  updateMenuSizes();
  const updateMenu = () => {
    const scrollTop = $document.scrollTop();
    if (scrollTop + HEADER_FIXED_TOP + menuHeight > containerOffsetBottom) {
      $menu.addClass('menu--bottom');
      $menu.removeClass('menu--fixed');
    } else if (scrollTop + HEADER_FIXED_TOP > menuOffsetTop) {
      $menu.addClass('menu--fixed');
      $menu.removeClass('menu--bottom');
    } else {
      $menu.removeClass('menu--fixed');
      $menu.removeClass('menu--bottom');
    }
  };
  updateMenu();
  $(window).on('scroll', () => {
    updateMenu();
  });

  $(window).on('resize', () => {
    updateMenuSizes();
  });
}
