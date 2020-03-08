$items = $('.faq__item');
if ($items.length) {
  $items.on('click', ( e ) => {
    const $item = $(e.delegateTarget);

    $item.find('.faq__answer').css(
      'height',
      $item.hasClass('faq__item--active') ? 0 : $item.find('.faq__inner').outerHeight(true),
    );
    $item.toggleClass('faq__item--active');
  });

  $(window).on('resize', ( e ) => {
    $('.faq__item--active').each(( i, el ) => {
      const $item = $(el);
      $item.find('.faq__answer').css('height', $item.find('.faq__inner').outerHeight(true));
    });
  });
}
