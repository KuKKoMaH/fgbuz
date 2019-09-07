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

$('.videoFrame').on('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  openPopup({
    items: { src: $(e.delegateTarget).attr('href') },
    type:  'iframe'
  });
  return false;
});

$('.sitePopup__opener').on('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (!Breakpoints.is('lg')) return;

  const $popup = $('#sitePopup');

  const $target = $(e.delegateTarget);
  $popup.find('.casePopup__title').html($target.find('.card__name').html());
  $popup.find('.casePopup__preview').hide();

  const iframeUrl = $target.data('url');
  if (iframeUrl) {
    const $iframe = $('<iframe>');
    $iframe.attr('src', iframeUrl);
    const $previewWrapper = $popup.find('.casePopup__preview--iframe');
    $previewWrapper.show();

    const resize = () => {
      const { width, height } = $previewWrapper[0].getBoundingClientRect();
      const previewWidth      = 1200;
      const scale             = width / previewWidth;
      $iframe.css({
        'transform': `scale(${scale})`,
        height:      height / scale,
        width:       previewWidth,
      });
    };
    openPopup({
      items:     { src: '#sitePopup' },
      alignTop:  true,
      mainClass: 'casePopup__wrapper',
      callbacks: {
        open:  () => {
          $previewWrapper.append($iframe);
          $(window).on('resize', resize);
          resize();
        },
        close: () => {
          $(window).off('resize', resize);
          $iframe.remove();
        }
      }
    });
  }

  const imageUrl = $target.data('image');
  if (imageUrl) {
    const $image = $('<img>');
    $image.attr('src', imageUrl);
    const $previewWrapper = $popup.find('.casePopup__preview--image');
    $previewWrapper.show();
    $previewWrapper.find('.casePopup__content').append($image);

    const scroller = baron({
      root:     $popup.find('.casePopup__info')[0],
      scroller: $popup.find('.casePopup__content')[0],
      bar:      $popup.find('.casePopup__bar')[0],
    });

    openPopup({
      items:     { src: '#sitePopup' },
      alignTop:  true,
      mainClass: 'casePopup__wrapper',
      callbacks: {
        close: () => {
          $image.remove();
          scroller.dispose();
        }
      }
    });
  }

  return false;
});

const popups = [
  [$('.smmPopup__opener'), $('#smmPopup')],
  [$('.contextPopup__opener'), $('#contextPopup')],
];
popups.forEach(([$opener, $popup]) => {
  $opener.on('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!Breakpoints.is('lg')) return;

    const $target = $(e.delegateTarget);
    $popup.find('.casePopup__title').html($target.find('.card__name').html());

    const $content = $target.find('.casePopup__content').children().clone();
    $content.find('img[data-src]').each((i, el) => {
      el.src = el.dataset.src;
    });
    $popup.find('.casePopup__content')
      .html('')
      .append($content);

    const scroller = baron({
      root:     $popup.find('.casePopup__info')[0],
      scroller: $popup.find('.casePopup__content')[0],
      bar:      $popup.find('.casePopup__bar')[0],
    });

    openPopup({
      items:     { src: '#' + $popup.attr('id') },
      alignTop:  true,
      mainClass: 'casePopup__wrapper',
      callbacks: {
        close: () => {
          scroller.dispose();
        }
      }
    });
    return false;
  });
});

$('.test__item').on('click', () => {
  openPopup({
    gallery: {
      enabled:     true,
      arrowMarkup: '',
    },
    items:   [
      { src: '#testPopup1' },
      { src: '#testPopup2' },
      { src: '#testPopup3' },
    ]
  });

});
$('#testPopup1 .testPopup__item').on('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  $.magnificPopup.instance.next();
  return false;
});

$('#testPopup2 .testPopup__item').on('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  $.magnificPopup.instance.next();
  return false;
});

