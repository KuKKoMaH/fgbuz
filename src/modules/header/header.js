import Breakpoints from 'breakpoints-js';
import baron       from 'baron';

const $search = $('.searchBlock');
const searchActiveClass = 'searchBlock--active';
const toggleSearch = () => {
  $search.toggleClass(searchActiveClass);
  $('.header__search').toggleClass('header__search--active');
};

$('.header__search').on('click', toggleSearch);
$('.searchBlock__close').on('click', toggleSearch);
$search.on('click', ( e ) => {
  if (!$(e.target).closest('.searchBlock__container').length) toggleSearch();
});


const $menu = $('.menu');
const menuActiveClass = 'menu--active';
$('.header__hamburger').on('click', ( e ) => {
  $menu.toggleClass(menuActiveClass);
  $(e.delegateTarget).toggleClass('header__hamburger--active');
});

$('.menu__primary li.menu-item-has-children > a').on('click', ( e ) => {
  e.preventDefault();
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

$('.header__menu > ul > li.menu-item-has-children').on('click', ( e ) => {
  e.preventDefault();
  const $el = $(e.delegateTarget);
  $el.find('.menu').toggleClass('menu--active');
});
$('.header__menu > ul > li.menu-item-has-children').on('mouseleave', ( e ) => {
  const $el = $(e.delegateTarget);
  $el.find('.menu').removeClass('menu--active');
});
