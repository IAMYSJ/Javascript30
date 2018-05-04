# Day 01-JavaScript Drum Kit

[DEMO](https://iamysj.github.io/Javascript30/01%20-%20JavaScript%20Drum%20Kit/index-START.html)

透過監聽鍵盤事件，取得 keyCode，來觸發對應的媒體播放以及 CSS 特效。

## Javascript 語法
```
const keys = document.querySelectorAll('[class="key"]');
```
document.querySelectorAll()：回傳一個 [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)

```
Array.from(keys).forEach(function(key) {
    key.addEventListener('transitionend', function() {
        key.classList.remove('playing');
    });
});
```
Array.from()：建立一個新的 [Array](https://developer.mozilla.org/en-US/docs/Glossary/array) 物件。

Array.forEach()：使陣列中的每個元素都執行一次 function()。

EventTarget.addEventListener()：能將指定的事件監聽器註冊到 [EventTarget](https://developer.mozilla.org/zh-TW/docs/Web/API/EventTarget) 
實作物件上。

Element.classList：取得物件的 class 屬性，也可以透過 [element.className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) 
來得到以空格分隔之 Class 清單字串。
* add( String [, String] )：新增 class 名稱，如果名稱已經存在，則會忽略。
* remove( String [,String] )：移除 class 名稱。
* item ( Number )：按照索引值回傳 collection 中的 class 名稱。
* toggle ( String [, force] )：
當只有一個參數時：切換 class 的名稱，如果名稱已經存在，則移除他並回傳 false，相反則新增並回傳 true；
當有第二個參數時：回傳 true，加入指定的 class 名稱，false 則移除。
* contains( String )：檢查元素是否存在指定的 class 名稱。

```
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${ e.keyCode }"]`);
    const key = document.querySelector(`div[data-key="${ e.keyCode }"]`);
    if(!audio) return;
    
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
});
```
KeyboardEvent.keyCode：鍵盤上的按鍵，都有一個 keyCode，可以透過 [keycode](http://keycode.info/) 這個網站查看按鍵的 keyCode。

Animation.currentTime：[Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)的屬性，
不管動畫執行或暫停，以毫秒回傳和設定目前時間；如果動畫沒有時間軸，無效或尚未播放，則當前時間返回值為 null。

Animation.play()：[Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) 
[Animation](https://developer.mozilla.org/en-US/docs/Web/API/Animation) Interface 的方法，用來播放動畫，
如果動畫完成，呼叫 play() 將重新從頭開始播放動畫。

### Event
transitionend：當 [CSS transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) 轉換完成時，
會觸發 transitionend 事件。在 transition 完成之前就被移除的情況下，
例如 [transition-property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property) 被移除
或 [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) 設置為 none，則事件不會發生。

keydown：當按下鍵盤按鍵時觸發。
