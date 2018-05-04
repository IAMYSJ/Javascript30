# 09 - Dev Tools Domination

練習 Javascript debug 用的 console 輸出。

##說明

###Regular

平常 debug 最常使用的。

> console.log('hello');

------------------------------------------------------------------------------------------------------------

### Interpolated

1. %s 的使用，在輸出 String 的時候可以當作變數帶入。
2. ES6 的新用法，\` \` 可以在裡面使用 ${} 這個語法來輸入變數。

> 1. console.log('Hello I am a %s string!', '💩');
>
> 2. const shit = '💩';
>
>    console.log(\`Hello I am a ${shit} string\`);

###Styled

%c 可以在輸出的字串中帶入 CSS Style。

> console.log('%c Hello World', 'font-size: 50px;');

###Warning!

能夠在 console 中輸出警告訊息。

> console.warn('OH NO');

###Error 

能夠在 console 中輸出錯誤訊息。

> console.error('SHIT');

###Info

能夠在 console 中輸出訊息。

> console.info('Crocodiles eat 3-4 people per year');

###Testing

判斷物件是否存在，若否，回傳錯誤訊息。

>  const p = document.querySelector('p');
>
>  console.assert(p.classList.contains('ouch'), 'That is wrong!');

###Clearing

清除 console。

> console.clear();

###Viewing DOM Elements

檢視 DOM 物件，log 可以在網頁中找出該 DOM 物件，dir 可以找出該 DOM 物件的相關資訊。

> console.log(p);

> console.dir(p);

###Grouping together

可以將 log 資料集合在輸出在 console 中，若用 group 會展開，groupCollapsed 則不會。

>  dogs.forEach(dog => {
>
> ​	// console.group(`${dog.name}`);
>
> ​	console.groupCollapsed(`${dog.name}`);
>
> ​	console.log(`This is ${dog.name}`);
>
> ​	console.log(`${dog.name} is ${dog.age} years old`);
>
> ​	console.log(`${dog.name} is ${dog.age * 7} dog years old`);
>
> ​	console.groupEnd(`${dog.name}`);
>
> });

###Counting

計算物件出現的次數。

> console.count(p);
>
> console.count('a');

###Timing

計算程式執行的時間。

> console.time('fetching data');
>
> fetch('https://api.github.com/users/wesbos')
>
> ​	.then(data => data.json())
>
> ​	 .then(data => {
>
> ​		console.timeEnd('fetching data');
>
> ​		console.log(data);
>
> ​	});

###Table

將陣列輸出成表格。

> console.table(dogs); 