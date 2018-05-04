# Day 03-CSS_Variables

[DEMO](https://iamysj.github.io/Javascript30/03%20-%20CSS%20Variables/index-START.html)

透過 Javascript 控制圖片的 CSS。

## 說明
```
:root {
	--spacing: 10px;
    --blur: 10px;
    --base: #ffc600;
	--grayscale: 10%;
}

img {
    padding: var(--spacing);
    filter: blur(var(--blur)) grayscale(var(--grayscale));
    background: var(--base);
}

.hl {
	color: var(--base);
}
```
使用 [:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) 及 [var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var) 設定圖片的 CSS，給圖片初始的 CSS 樣式。
```
const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => input.addEventListener('change', changeStyle));
inputs.forEach(input => input.addEventListener('mouseover', changeStyle));
```
取得 input tag 的 NodeList，並用 [forEach()](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach) 監聽每個 input object，這裡監聽 [change](https://developer.mozilla.org/en-US/docs/Web/Events/change) 跟 [mouseover](https://developer.mozilla.org/en-US/docs/Web/Events/mouseover) 事件。
```
function changeStyle() {
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
```
建立一個 changeStyle() 方法來改變圖片的 CSS 樣式，因為 [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Variables)，只能取得數字，所以要另外抓單位 (px)，在每個 input 裡面作者有加上一個屬性 data-sizing 來放單位，要用 [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) 來取得這個值。在來用 [documentElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement) 取得 [Style](https://developer.mozilla.org/en-US/docs/Tools/Style_Editor)， 最後 [setProperty()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty) 來改變 :root 裡面的變數值。
