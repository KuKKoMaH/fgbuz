const $menu = $('.header__menu');
const $menuTrigger = $('.header__menu-button, .header__menu');
const $placeholder = $('.header__placeholder');
const $menuTop = $('.header__top');
let menuOffset = $placeholder.offset().top;
const $document = $(document);

const activeClass = 'header__menu--active';
const fixedClass = 'header__menu--fixed';
const topFixedClass = 'header__top--fixed';

let menuVisible = false;
let menuFixed = false;

$menuTrigger.on('click', toggleMenu);

function toggleMenu() {
  if (menuVisible) {
    hideMenu();
  } else {
    showMenu();
  }
}

function showMenu() {
  if (menuVisible) return;
  $menu.addClass(activeClass);
  menuVisible = true;
}

function hideMenu() {
  if (!menuVisible) return;
  $menu.removeClass(activeClass);
  menuVisible = false;
}

$menu.find('a[href*="#"]').on('click', () => hideMenu());

$(window).on('scroll', checkMenuFixed);
$(window).on('resize', () => {
  menuOffset = $placeholder.offset().top;
  checkMenuFixed();
});

function checkMenuFixed() {
  const scrollTop = $document.scrollTop();
  if (scrollTop > menuOffset && !menuFixed) {
    $menu.addClass(fixedClass);
    menuFixed = true;
  } else if (scrollTop < menuOffset && menuFixed) {
    $menu.removeClass(fixedClass);
    menuFixed = false;
  }

  if(scrollTop > 0) {
    $menuTop.addClass(topFixedClass)
  } else {
    $menuTop.removeClass(topFixedClass)

  }
}

checkMenuFixed();

