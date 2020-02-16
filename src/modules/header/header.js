import Breakpoints from 'breakpoints-js';
import baron       from 'baron';

// const $menu = $('.header__menu');
// const $menuTrigger = $('.header__menu-button, .header__menu');
// const $placeholder = $('.header__placeholder');
// const $menuTop = $('.header__top');
// let menuOffset = $placeholder.offset().top;
// const $document = $(document);
//
// const activeClass = 'header__menu--active';
// const fixedClass = 'header__menu--fixed';
// const topFixedClass = 'header__top--fixed';
//
// let menuVisible = false;
// let menuFixed = false;
//
// $menuTrigger.on('click', toggleMenu);
//
// function toggleMenu() {
//   if (menuVisible) {
//     hideMenu();
//   } else {
//     showMenu();
//   }
// }
//
// function showMenu() {
//   if (menuVisible) return;
//   $menu.addClass(activeClass);
//   menuVisible = true;
// }
//
// function hideMenu() {
//   if (!menuVisible) return;
//   $menu.removeClass(activeClass);
//   menuVisible = false;
// }
//
// $menu.find('a[href*="#"]').on('click', () => hideMenu());
//
// $(window).on('scroll', checkMenuFixed);
// $(window).on('resize', () => {
//   menuOffset = $placeholder.offset().top;
//   checkMenuFixed();
// });
//
// function checkMenuFixed() {
//   const scrollTop = $document.scrollTop();
//   if (scrollTop > menuOffset && !menuFixed) {
//     $menu.addClass(fixedClass);
//     menuFixed = true;
//   } else if (scrollTop < menuOffset && menuFixed) {
//     $menu.removeClass(fixedClass);
//     menuFixed = false;
//   }
//
//   if(scrollTop > 0) {
//     $menuTop.addClass(topFixedClass)
//   } else {
//     $menuTop.removeClass(topFixedClass)
//
//   }
// }
//
// checkMenuFixed();
//

const $search = $('.search');
const searchActiveClass = 'search--active';
const toggleSearch = () => {
  $search.toggleClass(searchActiveClass);
  $('.header__search').toggleClass('header__search--active');
};

$('.header__search').on('click', toggleSearch);
$('.search__close').on('click', toggleSearch);
$search.on('click', ( e ) => {
  if (!$(e.target).closest('.search__container').length) toggleSearch();
});


const $menu = $('.menu');
const menuActiveClass = 'menu--active';
$('.header__hamburger').on('click', ( e ) => {
  $menu.toggleClass(menuActiveClass);
  $(e.delegateTarget).toggleClass('header__hamburger--active');
});

$('.menu__primary a').on('click', ( e ) => {
  const $el = $(e.delegateTarget);

  $el.parent('li').toggleClass('active');
});

$('.menu__primary > ul > li > a').on('click', ( e ) => {
  const $el = $(e.delegateTarget);
  $el.parents('ul').first().find('> li > ul').removeClass('activeStep');
  $el.parent('li').find('> ul').addClass('activeStep');
  $('.menu__container').attr('class', 'menu__container menu__container--step2');
});

$('.menu__primary > ul > li > ul > li > a').on('click', ( e ) => {
  const $el = $(e.delegateTarget);
  $el.parents('ul').first().find('> li > ul').removeClass('activeStep');
  $el.parent('li').find('> ul').addClass('activeStep');
  $('.menu__container').attr('class', 'menu__container menu__container--step3');
});

$('.menu__back').on('click', () => {
  const $container = $('.menu__container');
  if ($container.hasClass('menu__container--step3')) {
    $('.menu__container').attr('class', 'menu__container menu__container--step2');
  } else if ($container.hasClass('menu__container--step2')) {
    $('.menu__container').attr('class', 'menu__container');
  }
});

let scrollers = [];
const destroy = () => {
  for (let i = 0; i < scrollers.length; i++) {
    scrollers[i].dispose();
  }
  scrollers = [];
};
const init = () => {
  $('.menu__container').each(( i, el ) => {
    scrollers.push(baron({
      // root:         '.included__content',
      root:         el,
      scroller:     '.menu__content',
      bar:          '.menu__bar',
      track:        '.menu__track',
      scrollingCls: '_scrolling',
      draggingCls:  '_dragging',
    }));
  });
};

Breakpoints.on('sm', 'enter', destroy);
Breakpoints.on('md', 'enter', destroy);
Breakpoints.on('lg', 'enter', init);

$('.header__menu > ul > li.menu-item-has-children').on('mouseenter', ( e ) => {
  const $el = $(e.delegateTarget);
  $el.find('.menu').addClass('menu--active')
});
$('.header__menu > ul > li.menu-item-has-children').on('mouseleave', ( e ) => {
  const $el = $(e.delegateTarget);
  $el.find('.menu').removeClass('menu--active')
});
