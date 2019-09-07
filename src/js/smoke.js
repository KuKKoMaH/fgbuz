const img  = new Image();
let canvas;
img.onload = () => {
  const ctx = canvas.getContext('2d');

  var tic,
      start = Date.now();

  var params = {
    AMP:      20,
    FREQ:     0.03,
    SPEED:    4,
    VERTICAL: false
  };

  var X_OFFSET = 130;
  var Y_OFFSET = 72;

  function update() {
    tic = (Date.now() - start) * 0.001;
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < img.width; i++) {
      for (var j = 0; j < img.height; j++) {
        var ofs = params.AMP * (0.5 + (Math.sin(tic * params.SPEED + (i * params.FREQ)) * 0.5));
        ctx.drawImage(img,
          i, j, 1, 1,
          X_OFFSET + x + (ofs * 0.2), Y_OFFSET + y - (ofs * 0.2), 1, 1);
      }
    }

    // for (var i = 0; i < img.height; i++) {
    //   if (params.VERTICAL) {
    //     var ofs = params.AMP * (0.5 + (Math.sin(tic * params.SPEED + (i * params.FREQ)) * 0.5));
    //     ctx.drawImage(img,
    //       0, i, img.width, 1,
    //       0, i - (ofs * 0.5), img.width, 1 + ofs);
    //   } else {
    //     var ofs = params.AMP * Math.sin(tic * params.SPEED + (i * params.FREQ));
    //     ctx.drawImage(img,
    //       0, i, img.width, 1,
    //       100 + ofs, 100 + i, img.width, 1);
    //   }
    //
    // }
  }

  function loop() {
    requestAnimationFrame(loop);
    update();
    render();
  }

  loop();
};

window.smoke = (event) => {
  canvas = $(event.target.parentElement).find('canvas')[0];

  canvas.width  = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  img.src       = canvas.dataset.src;
  // var party = SmokeMachine(ctx, [54, 16.8, 18.2])
  // party.start() // start animating
  // party.addSmoke(100, 100, 10) // wow we made smoke
};