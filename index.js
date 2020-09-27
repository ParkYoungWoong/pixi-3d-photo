const PIXI = require('pixi.js');

module.exports.generate3dPhoto = function (options) {
  let width;
  let height;
  const {
    el, src, srcMap, scale = 1
  } = options;
  const $target = document.querySelector(el);

  const image = new Image()
  image.src = src
  image.onload = function () {
    width = image.width * scale;
    height = image.height * scale;
    $target.style.width = `${width}px`;
    $target.style.height = `${height}px`;

    let app = new PIXI.Application({
      width,
      height
    });
    app.stage.width = width;
    app.stage.height = height;
    $target.appendChild(app.view);
    
    let img = new PIXI.Sprite.from(src);
    img.width = width;
    img.height = height;
    app.stage.addChild(img);
    
    let depthMap = new PIXI.Sprite.from(srcMap);
    depthMap.width = width;
    depthMap.height = height;
    app.stage.addChild(depthMap);
            
    let displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
    app.stage.filters = [displacementFilter];
    
    $target.onmousemove = function(e) {
      displacementFilter.scale.x = (width / 2 - e.clientX) / 20;
      displacementFilter.scale.y = (height / 2 - e.clientY) / 20;
    };
  }
}