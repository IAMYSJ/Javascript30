# 16 - Mouse Move Shadow

[DEMO](https://iamysj.github.io/Javascript30/16%20-%20Mouse%20Move%20Shadow/index-start.html)

透過 Javascript 控制 element 的 CSS textShadow。

## 說明

> const { offsetHeight: height, offsetWidth: width } = hero;

這種變數宣告稱作[Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。

> hero.addEventListener('mousemove', shadow);

透過 mousemove 事件取得滑鼠目前所在的位置。

**offsetHeight**：取得元素的高。

**offsetWidth**：取得元素的寬。

**offsetLeft**：取得元素相對於 offsetParent 節點左邊界的距離。

**offsetTop**：取得元素相對於 offsetParent 節點上邊的距離。

**offsetX**：透過 MouseEvent 得到滑鼠目前的 x 座標。

**offsetY**：透過 MouseEvent 得到滑鼠目前的 y 座標。

