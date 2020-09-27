const PIXI = require('pixi.js');

module.exports.generate3dPhoto = function (options) {
  let width;
  let height;
  const {
    el, src, map, scale = 1
  } = options;
  const $target = document.querySelector(el);

  const image = new Image()
  image.src = src
  image.onload = function () {
    width = image.width * scale;
    height = image.height * scale;
    $target.style.width = `${width}px`;
    $target.style.height = `${height}px`;

    // Generate PIXI app.
    let app = new PIXI.Application({
      width,
      height
    });
    app.stage.width = width;
    app.stage.height = height;
    $target.appendChild(app.view);

    // Generate Sprite object for original image.
    let img = new PIXI.Sprite.from(src);
    img.width = width;
    img.height = height;

    // Generate Sprite object for depth map.
    let depthMap = new PIXI.Sprite.from(map);
    depthMap.width = width;
    depthMap.height = height;

    // Generate displacement filter by depth map.
    let displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);

    // Put on the stage.
    app.stage.addChild(img);
    app.stage.addChild(depthMap);
    app.stage.filters = [displacementFilter];

    $target.onmousemove = function(e) {
      displacementFilter.scale.x = (width / 2 - e.clientX) / 20;
      displacementFilter.scale.y = (height / 2 - e.clientY) / 20;
    };
  }
}
