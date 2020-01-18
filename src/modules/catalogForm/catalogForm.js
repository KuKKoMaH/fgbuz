const updateImg = ($el) => {
  const $form = $el.parents('.catalogForm');
  if (!$form) return;

  const value = $el.val();
  const $images = $form.find('.catalogForm__img');
  $images.removeClass('catalogForm__img--active');
  $images.filter('[data-type=' + value + ']').addClass('catalogForm__img--active');
};

$('[name="form-type"]:checked').each((i, el) => {
  const $el = $(el);
  updateImg($el);
});

$('[name="form-type"]').on('change', (e) => {
  const $el = $(e.target);
  updateImg($el);
});
