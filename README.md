# 3D photo generator by PixiJS

```bash
$ npm i pixi-3d-photo
```

<img src="https://github.com/ParkYoungWoong/pixi-3d-photo/blob/master/assets/sample.gif" width="500" />

```js
import { generate3dPhoto } from './pixi-3d-photo'

generate3dPhoto({
  el: '#car',
  src: 'car.jpg',
  srcMap: 'car.map.jpg',
  scale: 1.3
})
generate3dPhoto({
  el: '#pikachu',
  src: 'pikachu.jpg',
  srcMap: 'pikachu.map.jpg',
  scale: 1
})
```
