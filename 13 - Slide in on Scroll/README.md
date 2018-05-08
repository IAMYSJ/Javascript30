# 13 - Slide in on Scroll

[DEMO](https://iamysj.github.io/Javascript30/13%20-%20Slide%20in%20on%20Scroll/index-START.html)

## 說明

### CSS

```css
text-align: justify; /* 使文字對齊左右邊緣 */
float: left|right; /* 使元素向左或向右浮動 */
opacity: 0~1; /* 元素的透明度 */
transform: translateX(30%) scale(0.95); /* translateX: 使元素平行移動、scale: 使元素等比例放大或縮小 */
transition: all .5s; /* 使變化的效果延遲5秒後執行 */
```

### Javascript

為了在滑動螢幕到圖片一半時，使圖片呈現。

```javascript
const slideInAt = (window.scrollY + window.innerHeight) - (sliderImg.height / 2);
```

window.scrollY：取得滾動的距離。

window.innerHeight：取得瀏覽器視窗高度。

sliderImg.height：取得圖片高度。

------------------------------------------------------------------------------------------------------------------------------------------

取得圖片的 bottom 到畫面最上面的位置。

```js
const imgBottom = sliderImg.offsetTop + sliderImg.height;
```

sliderImg.offsetTop：取得與上層元素的頂點的距離。

sliderImg.height：取得圖片高度。

----------

判斷是否滑動到圖片一半的高度。

```javascript
const isHalfShown = slideInAt > sliderImg.offsetTop;
const isNotScrolledPast = window.scrollY < imgBottom;

if(isHalfShown && isNotScrolledPast) {
	sliderImg.classList.add('active');
} else {
     sliderImg.classList.remove('active');
}
```

isHalfShown：是否滑動到圖片一半高度。

isNotScrolledPast：是否滑動過圖片。
