import baron from 'baron';

$('.frontWork__place').hide();
$('.frontWork__place').first().show();

var $worksSelect = $('#frontWork-select').data('selectize');
if ($worksSelect) {
  $worksSelect.on('change', function ( value ) {
    $('.frontWork__place').hide();
    $('#frontWork-' + value).show();
  });
}

$('.frontWork__phones').each(( i, el ) => {
  baron({
    // root:         '.included__content',
    root:         el,
    scroller:     '.frontWork__inner',
    bar:          '.frontWork__bar',
    track:        '.frontWork__track',
    scrollingCls: '_scrolling',
    draggingCls:  '_dragging',
  });
});
