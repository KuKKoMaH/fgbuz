const $forms      = $('.bigForm__form');
const activeClass = 'bigForm__form--active';

$(".bigForm [name='form-type']").on('change', e => {
  $forms.removeClass(activeClass);
  $forms.filter('[data-type="' + e.target.value + '"]').addClass(activeClass);
});
