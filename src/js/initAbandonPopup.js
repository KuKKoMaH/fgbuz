import openPopup from './openPopup';

const selector = window.ABANDON_WINDOW;

if (selector) {
  let inited = false;
  let mouseY = 0;
  let shown  = false;

  document.addEventListener("mousemove", function (e) {
    mouseY = e.clientY;
    if (mouseY > 100) inited = true;
  });

  $(document).mouseleave(function () {
    if (!$.magnificPopup.instance.isOpen && inited && !shown && mouseY < 100) {
      shown = true;
      openPopup({
        items: { src: $(selector) },
      });
    }
  });
}