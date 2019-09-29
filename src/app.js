import 'jquery';
import 'magnific-popup/dist/jquery.magnific-popup.js';
import 'jquery.maskedinput/src/jquery.maskedinput';
import SmoothScroll from 'smooth-scroll';
// import 'selectize';

import './js/init';
// import './js/cartsList';
// import './js/initAbandonPopup';
import './js/popups';
// import './js/paroller';
// import './js/smoke';
// import './js/tabs';
// import './js/saveUTM';
import './modules/header/header';
// import './modules/team/team';
// import './modules/problems/problems';
// import './modules/progress/progress';
// import './modules/clients/clients';
// import './modules/services/services';
// import './modules/videos/videos';
// import './modules/test/test';
// import './modules/map/map';
// import './modules/contacts/contacts';
// import './modules/images/images';
// import './modules/logotypes/logotypes';
// import './modules/presentations/presentations';
// import './modules/siteTypes/siteTypes';
// import './modules/smmHero/smmHero';
// import './modules/contextHero/contextHero';
import './modules/advantages/advantages';
import './modules/blogList/blogList';
import './modules/about/about';
import './modules/examples/examples';
import './modules/certificates/certificates';
import './modules/contacts/contacts';
import './modules/gallery/gallery';
import './modules/testimonials/testimonials';
import './modules/related/related';
import './modules/catalogMenu/catalogMenu';
import './modules/menu/menu';
import './modules/catalogAdvantages/catalogAdvantages';
import './modules/catalogVariants/catalogVariants';
import './modules/bigForm/bigForm';

import './js/lazyImages';

// $('select').selectize({ maxItems: 1, });

$('input[type="tel"]').mask("+7 (999) 999-99-99");

window.smoothscroll = new SmoothScroll('a[href*="#"]', { header: '.header__container', });

