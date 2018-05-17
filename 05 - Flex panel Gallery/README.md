# 05-Flex_panel_Gallery

[DEMO](https://iamysj.github.io/Javascript30/05%20-%20Flex%20panel%20Gallery/index-START.html)

使用 CSS flex 排版，Javascript 控制 tag 的 class。

## 說明

###CSS

#### flex

分為外容器 (Container) 與內元件 (items)。

**Container 外容器屬性**

* display：宣告 flex。
* flex-flow：`flex-direction` 與 `flex-wrap`的縮寫。
  * flex-direction：控制內元件的主軸線及排序方向。分為 row、row-reverse、column、column-reverse。
  * flex-wrap：超出範圍時是否換行。分為 nowrap、wrap、wrap-reverse。
* justify-content：根據容器的主軸線分配內容項目之間和周圍分配空間。
* align-items：根據容器的交錯軸線分配內容項目之間和周圍分配空間。
* align-content：

**Items 內元件屬性**

* flex
  * flex-grow
  * flex-shrink
  * flex-basis
* order
* align-self

### Javascript

用 [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) 的方法來控制 tag 的 class。

* add
* remove
* item
* toggle
* contains
* replace

