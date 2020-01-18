const $forms = $('.bigForm__form');
const activeClass = 'bigForm__form--active';
const $items = $(".bigForm__type input");

const show = ($el) => {
    $el.css('height', $el.find('.bigForm__block').outerHeight());
};

const hide = ($el) => {
    $el.css('height', '');
};

$items.on('change', e => {
    const $el = $forms.filter('[data-type="' + e.target.value + '"]');
    e.target.checked ? show($el) : hide($el);
});

$items.each((i, el) => {
    if (el.checked) show($forms.filter('[data-type="' + el.value + '"]'));
});

