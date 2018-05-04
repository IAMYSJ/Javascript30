# Day 04-Array_Cardio_Day1

陣列的 filter、map、sort、reduce 練習。

## 說明

1. [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 方法讓我們透過指定的函式，構成新的陣列。

2. [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 方法讓我們對陣列的每個元素進行指定函數的運算後，回傳並建立新的陣列。

3. [sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 方法會 [原地 (in place)](https://zh.wikipedia.org/wiki/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95) 對一個陣列的所有元素進行排序，並回傳此陣列，這裡帶入 compareFunction(a, b)。
* 若 compareFunction(a, b) 的回傳值小於 0，則會把 a 排在小於 b 之索引的位置，即 a 排在 b 前面。
* 若 compareFunction(a, b) 回傳 0，則 a 與 b 皆不會改變彼此的順序，但會與其他全部的元素比較來排序。
* 若 compareFunction(a, b) 的回傳值大於 0，則會把 b 排在小於 a 之索引的位置，即 b 排在 a 前面。
* compareFunction(a, b) 在給予一組特定元素 a 及 b 為此函數之兩引數時必須總是回傳相同的值。若回傳值不一致，排序順序則為 undefined。

4. [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) 方法可以帶入一個 callback function 以及一個初始值 (Optional)，而 callback function 可以接受四個參數：
* accumulator：callback function 的回傳值，
* currentValue 
* currentIndex // Optional
* array // Optional










