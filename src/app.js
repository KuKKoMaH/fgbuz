import 'jquery';
import 'magnific-popup/dist/jquery.magnific-popup.js';
import 'jquery.maskedinput/src/jquery.maskedinput';
import SmoothScroll from 'smooth-scroll';
import 'selectize';

import './js/init';
// import './js/cartsList';
// import './js/initAbandonPopup';
import './js/popups';
// import './js/paroller';
// import './js/smoke';
// import './js/tabs';
// import './js/saveUTM';
import './modules/header/header';
import './modules/frontSlider/frontSlider';
import './modules/frontMenu/frontMenu';
import './modules/frontWork/frontWork';


import './js/lazyImages';

$('.select').selectize({ maxItems: 1, });

$('input[type="tel"]').mask("+7 (999) 999-99-99");

window.smoothscroll = new SmoothScroll('a[href*="#"]', { header: '.header__container' });
