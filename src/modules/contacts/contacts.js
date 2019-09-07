import scriptLoader from '../../js/scriptLoader';
import mapStyles    from '../../js/mapStyles';

const $map    = $("#map");
let inited    = false;
const initMap = () => {
  if (inited) return;
  inited = true;
  scriptLoader(`https://api-maps.yandex.ru/2.1/?lang=ru_RU`, () => {
    ymaps.ready(init);

    function init() {
      const el                      = $map[0];
      let { center, zoom, address } = el.dataset;

      try {
        center = JSON.parse(center);
        zoom   = +zoom;

        const myMap = new ymaps.Map(el, {
          center:   center,
          controls: ['fullscreenControl', 'zoomControl'],
          zoom:     zoom,
        });

        myMap.geoObjects.add(new ymaps.Placemark(center, { balloonContent: address, }));

      } catch (e) {
        console.log(e);
      }
    }
  });
};

if ($map.length) {
  var observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      initMap();
    }
  }, { threshold: 0 });
  observer.observe($map[0]);
}

