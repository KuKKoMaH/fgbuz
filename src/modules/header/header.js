/* ================================================ */
/* Меню */
/* ================================================ */
const $menu        = $('.header__menu');
const $menuTrigger = $('.header__menu-button, .header__menu');
// const $menuContent = $('.menu__content');
let menuVisible    = false;

$menuTrigger.on('click', () => toggleMenu());

function toggleMenu() {
  if (menuVisible) {
    hideMenu();
  } else {
    showMenu();
  }
}

function showMenu() {
  if (menuVisible) return;
  $menu.addClass('header__menu--active');
  // $menu.addClass('menu--active');
  // $menuTrigger.addClass('menu__trigger--active');
  //
  // setTimeout(() => {
  //   $menu.addClass('menu--visible');
    menuVisible = true;
  // }, 0);
}

function hideMenu() {
  if (!menuVisible) return;
  $menu.removeClass('header__menu--active');

  // $menu.removeClass('menu--visible');
  // $menu.one('transitionend', () => {
  //   $menu.removeClass('menu--active');
  // });
  // $menuTrigger.removeClass('menu__trigger--active');
  menuVisible = false;
}

$menu.find('a[href*="#"]').on('click', () => hideMenu());

/* ================================================ */
