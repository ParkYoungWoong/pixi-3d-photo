# 3D photo generator by PixiJS

```bash
$ npm i pixi-3d-photo
```

You need the original image and the depth map image.<br />
Your browser must support WebGL.<br />
If this plugin does not work, Check your browser's hardware acceleration option.

<img src="https://github.com/ParkYoungWoong/pixi-3d-photo/blob/master/assets/sample.gif" width="500" /> 

<img src="https://github.com/ParkYoungWoong/pixi-3d-photo/blob/master/assets/pikachu.jpg" width="300" />
<br />
<img src="https://github.com/ParkYoungWoong/pixi-3d-photo/blob/master/assets/pikachu.map.jpg" width="300" />
<br />
Image credit: [Create 3D Photo from Image JavaScript Tutorial (Red Stapler)](https://redstapler.co/3d-photo-from-image-javascript-tutorial)

```html
<div id="pikachu"></div>
```

```js
import { generate3dPhoto } from './pixi-3d-photo'

generate3dPhoto({
  el: '#pikachu', // Required
  src: 'pikachu.jpg', // Required
  srcMap: 'pikachu.map.jpg', // Required
  scale: 0.7 
})
```
