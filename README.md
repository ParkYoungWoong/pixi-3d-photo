# 3D photo generator by PixiJS

You need the original image and the [depth map.](https://en.wikipedia.org/wiki/Depth_map) <br />
Also, your browser must support WebGL.<br />
If this plugin does not work, Check your browser's hardware acceleration option.

<img src="https://github.com/ParkYoungWoong/pixi-3d-photo/blob/master/assets/sample.gif" width="500" /> 

<img src="https://github.com/ParkYoungWoong/pixi-3d-photo/blob/master/assets/pikachu.jpg" width="260" />
<img src="https://github.com/ParkYoungWoong/pixi-3d-photo/blob/master/assets/pikachu.map.jpg" width="260" />

Image credit: [Create 3D Photo from Image JavaScript Tutorial, Red Stapler](https://redstapler.co/3d-photo-from-image-javascript-tutorial)

## Installation

```bash
$ npm i pixi-3d-photo
```

## How to use

```html
<div id="pikachu"></div>
```

```js
import { generate3dPhoto } from 'pixi-3d-photo'

generate3dPhoto({
  el: '#pikachu', // Required!
  src: 'pikachu.jpg', // Required!
  map: 'pikachu.map.jpg', // Required!
  scale: 0.7 // Optional, default: 1 
})
```
