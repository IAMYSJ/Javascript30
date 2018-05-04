# Day 02-JS and CSS Clock

[DEMO](https://iamysj.github.io/Javascript30/02-JS_and_CSS_Clock/index-START.html)

使用 Javascript 的 [Date](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date)，
透過 CSS 的 [transform](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform) 呈現時鐘的效果。

## 說明
```
function setDate() {
    const now = new Date();
      
    const seconds = now.getSeconds();
    const secondDegree = (seconds/60)*360 + 90;
    secondhand.style.transform = `rotate(${secondDegree}deg)`;

    const mins = now.getMinutes();
    const minDegree = (mins/60)*360 + 90;
    minhand.style.transform = `rotate(${minDegree}deg)`;

    const hours = now.getHours();
    const hourDegree = (hours/12)*360 + 90;
    hourhand.style.transform = `rotate(${hourDegree}deg)`;
}
```
```
setInterval(setDate, 1000);
```
### Javascript
1. 建立一個 Date 物件來指向某個時間點，基於世界標準時間（UTC）1970 年 1 月 1 日開始的毫秒數值來儲存時間。
2. getSeconds() 回傳本地時間的秒數 (0-59)。
3. getMinutes() 回傳本地時間的分鐘數 (0-59)。
4. getHours() 回傳本地時間的小時 (0-23)。
5. setInterval() 讓方法每隔幾毫秒執行一次。
### CSS
1. 透過 Javascript 取得元素的 style，並使用 [transform](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform) 來旋轉。
transform 可以使元素被平移、旋轉、縮放和傾斜。
2. 要使元素旋轉，要用 rotate(deg) 方法，deg 是角度，因此除了放入數字外要再加上 deg。

```
.hand {
    position: absolute;
    top: 50%;
    
    transform-origin: 100%;
    transform: rotate(90deg);
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}
```
.hand 要再加入另外 4 個 CSS 屬性。
1. [transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)：
這個屬性要和 rotate(deg) 搭配使用，有三個參數，x 軸、y 軸、z 軸，預設為 50%、50%、0，可以移動元素的原點，原點在元素的左上角。
2. [transform](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform)：
修改 CSS 可視化格式模型 (visual formatting model) 的空間維度。
3. [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)：
這是一個 [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)。
4. [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)：
描述物件改變狀態間的動畫效果。
```
.hour-hand {
    width: 50%;
    height: 6px;
    background: black;
}

.min-hand {
    width: 50%;
    height: 6px;
    background: black;
}

.second-hand {
    width: 50%;
    height: 2px;
    background: white;
}
```
這邊改變了時針、分針、秒針的長度。
