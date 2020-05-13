# jQuery

## 1 jQuery基础概念



### 1.1 文档就绪事件

```js
$(document).ready(function(){

});

$(function(){
    
});
```

### 1.2 jQuery DOM 和 原生 DOM

```
$(selector) 返回的是jQuery DOM

// 原生DOM 转为 jQuery DOM
$(原生DOM对象)  返回jQuery DOM
事件中： $(this);  each: 遍历出来的是原生DOM

// jQuery DOM 转为 原生DOM
jQuery DOM本质上是原生DOM的集合，是个伪数组对象； jQueryDOM的每个成员都是原生DOM
通过[下标]

```



### 1.3 连贯操作

```
$('.box').css().width().height().hide().show()
jQueryDOM的方法返回仍然是jQueryDOM

```



## 2 jQuery选择器

### 2.1 基本选择器

```
idName
className
tagName
*
selector,selector
```

### 2.2 层级选择器

```
selector selector
selector>selector
prev+next
prev~next
```

### 2.3 过滤选择器

```
:first
:last
:eq()   从0开始
:lt()
:gt()   
:even 偶数行
:odd
:header
:animated
```

### 2.4 内容选择器

```
:contains(text)
:parent
:empty
:not(selecotr)
:has(seelctor)
```

### 2.5 可见性

```
:visible
:hidden
```

### 2.6 属性选择器

```
[attr]
[attr=value]
[attr!=value]
[attr^=value]
[attr$=value]
[attr*=value]
[][][][]
```

### 2.7  子元素选择器(css3中也有)

```
:first-child
:last-child
:nth-child() 从1开始
:nth-last-child()
:only-child

:first-of-type
:last-of-type
:nth-of-type()
:nth-last-of-type()
:only-of-type
```

### 2.8 表单选择器

```
:input
:text
:password
:checkbox
:readio
:reset
:submit
:button
:file
```

### 2.9 表单对象选择器

```
:disabled
:enabled
:checked
:selected
```



## 3 筛选器

### 3.1 过滤

```
first()
last()
eq()
filter()
not()
has()
slice() 
```

### 3.2 查找

```
子元素：
find()
children()

父元素：
parent()
parents()

兄弟元素:
next()
nextAll()
nextUntil()
prev()
prevAll()
prevUntil()
siblings()
```

### 3.3 串联

```
end()
```



## 4 属性

### 4.1 属性方法

```
attr()
removeAttr()
prop()
removeProp()
```

### 4.4 class操作

```
addClass()
removeClass()
toggleClass()
hasClass()  返回布尔值
```

### 4.4 代码值文本

```
html()
text()
```



## 5 CSS操作

### 5.1 css方法

```
css()
```

### 5.2 位置

```
offset()  同getBoundingCientRect()
scrollLeft()
scrollTop()
```

### 5.3 尺寸

```
width() / height()
innerWidth() / innerHeigh()
outerWidth() / outerHeight()
```



## 6 DOM操作

```
内部插入：
	append()
	appendTo()  box.appendTo('#wrapper')
	prepend()
	prependTo()

外部插入：
	after()
	insertAfter()
	before()
	insertBefore()

包裹：
	wrap()
	wrapAll()
	unwrap()
	
替换
	repaceWith() 已存在的元素调用
	replaceAll()
	
删除：
	remove()
	empty()
	
克隆：
	clone()
```



## 7 jQuery 的事件机制

### 7.1 事件绑定

```
① 把事件当做jQueryDOM的方法
② on()   on('事件名', function(){})
② one() 只监听一次   one('事件名', function(){})
```

### 7.2 事件解除绑定

```
off() 指定要解除的事件，不写参数会解除元素上所有的事件
```

### 7.3 自动触发事件

```
trigger()  
```

### 7.4 事件委派

```
$('parent').on('事件名', 'child', function(){})
```





### 7.5 事件类型 (jQuery在原生事件基础上添加的)

````
mouseenter 代替 mouseover
mouseleave 代替 mouseout
hover()    鼠标悬停元素上触发hover， 鼠标离开元素也能触发hover （mouseenter和mouseleave合起来）
focusin()  获取焦点，在输入框的父元素上监听
focusout() 失去焦点，同上
````

> 表单事件： （原生js就有）
>
> blur
>
> focus
>
> select
>
> change  适合于select、：checkbox、：radio
>
> submit  给表单form监听	



### 7.6 事件对象 Event （jQuery的Event对象 同 JS的Event对象）

```
属性：
keyCode   键盘按键的ascii
clientX	  鼠标在视口上的水平坐标
clientY	  鼠标在视口上的垂直坐标
target	  目标元素

方法；
stopPropagation();  阻止冒泡
preventDefault();	阻止默认行为

```

> 在事件的方法中，return false，既能阻止冒泡，又能阻止默认行为



## 8 jQuery 动画效果

### 8.1 基本

```
hide()	   元素的width/height/opacity在变化
show()     // 不指定参数，瞬间变化；可以指定时间，slow\normal\fast也可以是毫秒数
toggle()
```

```js
$('#box').show(2000, function(){
    // 回调函数会等到动画执行结束调用
});
```

### 8.2 滑动

```
slideUp()  隐藏  元素height属性变化
slideDown()  显示  
slideToggle() 切换
```



### 8.3 淡入淡出

```
fadeIn()  显示
fadeOut()  隐藏
fadeToggle()  切换
fadeTo()	过渡到目标oapcity值
```



### 8.3 自定义动画

```
animate()
```

```
animate({
	width: "300px"
}, 2000, function(){
	
})
```



### 8.5 动画控制

```
stop()  停止动画，把元素上当前的动画全部停止
finish()  把动画快速完成
delay()  延迟执行
```

