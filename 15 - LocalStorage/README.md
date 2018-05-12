# 15 - LocalStorage

[DEMO]()

這次 Wes Bos 教大家如何使用 LocalStorage 來儲存資料。

## 說明

[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) 與 [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) 相似，不同處在於，localStorage 的資料儲存是沒有期限的，而 sessionStorage 則是在網頁關閉時消失。

`localStorage.setItem('items', JSON.stringify(items));`

在 localStorage 中用一組 key/value 來儲存資料，這裡的 key 為 items， value 為  JSON.stringify(items)，為什麼 items 要再用 JSON.stringify() 去解析呢？

因為 [setItem()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem) 的 value，只看得懂 string，而 items 是一個 Object，所以要把裡面的資料轉換成 string。

`const items = JSON.parse(localStorage.getItem('items')) || [];`

每次網頁再重新整理時，會去找 localStorage 是否有我們儲存的資料，[getItem()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem) 會幫我們用帶入的 key 去找是否有符合的 value。