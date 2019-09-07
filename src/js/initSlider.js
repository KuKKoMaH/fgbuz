import Swiper      from 'swiper';
import Breakpoints from 'breakpoints-js';

export default (selector, props) => {
  const $wrapper = $(selector);
  if ($wrapper.length) {
    $wrapper.each((i, el) => {
      let slider = null;

      const initSlider = () => {
        if (slider) return;
        slider = new Swiper(el, props);
      };

      const destroySlider = () => {
        if (!slider) return;
        slider.destroy();
        slider = null;
      };

      Breakpoints.on('sm', 'enter', () => {
        initSlider();
      });
      Breakpoints.on('md', 'enter', () => {
        initSlider();
      });
      Breakpoints.on('lg', 'enter', () => {
        destroySlider();
      });
    })
  }
}
