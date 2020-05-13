# jQuery
http://example.fuming.site/#/jquery
## 1. jQuery基本使用
### 1.1 引入jQuery
```html
<script src="jqueyr.min.js"></script>
<script></script>

```

### 1.2 jQuery的版本
* 1.x.x     兼容IE6+
* 2.x.x 到 3.x.x     IE9+和非IE浏览器


### 1.4 文档就绪事件
```js
$(document).ready(function(){
    
});
// 当页面中所有DOM元素加载完毕就触发； 区别于window.onload事件
// load事件等页面中一切加载完毕，包括外部引入的文件（如 图片）
```
``
实现 ready事件，原理：
DOMContentLoaded 事件 （原生事件）
document.addEventListener('DOMContendLoaded, function(){
    
);
``

### 1.5 连贯操作
```js
$('.box').width().height().css().css().scrollTo().text();
```
```
给obj对象添加一个方法fn， 保证fn方法最后返回 obj
```
### 1.6 jQuery对象（核心函数）(核心对象)
* $ 是 jQuery的别名； jQuery类库唯一暴露的全局变量
* 获取页面中的元素,可以把选择器作为参数
* 创建一个元素
* 把原生DOM转换为jQueryDOM
```js
$('.box');  // 获取元素
$('<li>');  //创建元素
$(dom);  //参数是个原生DOM对象
```
```
jQuery的选择器实现原理：
document.querySelector()
document.querySelectorAll()
```

### 1.7 jQueryDOM 和 原生DOM 区别
* jQueryDOM和原生DOM是两个不同的对象，他们的API的不能混用；
* 二者联系： jQueryDOM本质上是由原生DOM组成的集合
* 原生DOM->jQueryDOM: 使用$方法  `$(dom)`
* jQueryDOM->原生DOM： []取下标



## 2 jQuery选择器
### 2.1 基本选择器
```
#idName
.className
tagName
*
selector,selector,selector,
```

### 2.2 层级选择器
```
parent child
parent>child
prev+next
prev~next  next是prev后面的兄弟元素 所有
```

### 2.3 过滤选择器
* :first
* :last
* :eq()
* :lt()
* :gt()
* :odd()
* :even()
* :header  所有的h标签
* :animated  正在执行动画的元素

###2.4 内容选择器
* :contains(text)  包含指定文本的元素（自己包含文本和后代元素包含文本都可以）
* :empty      没有子元素也没有内容的元素
* :parent     有子元素或有内容的元素 与empty相反
* :not(selector)   去掉能被selector匹配的元素
* :has(selector)   包含子元素（匹配selector） 的元素

###2.5 可见性选择器
* :hidden   隐藏的元素：display：none/ visibility:hidden/ input:hidden
* :visible

### 2.6 属性选择器
* [attrName]
* [attrName=value]
* [attrName!=value]
* [attrName^=value]
* [attrName$=value]
* [attrName*=value]
* [][][]


### 2.7 子元素原则器
* :first-child
* :latst-child
* :nth-child()  从1开始
* :nth-last-child()  倒数
* :only-child
* :first-of-type
* :last-of-type
* :nth-of-type()
* :nth-last-of-type()
* :only-of-type


### 2.8 表单选择器
* :input  选择所有的表单控件： input元素、textarea元素、select元素、button元素
* :text
* :password
* :radio
* :checkbox
* :reset
* :submit
* :button
* :file


### 2.9 表单对象选择器
* :disabled
* :enabled
* :checked
* :selected



##3 属性和样式操作
###3.1 属性
* attr(name [,value])  设置或获取属性；直接对HTML元素操作属性；（实现原理：getAttribute(),setAttribute()）；一般用于操作自定义属性；
* removeAttr(name)  移除html元素上的属性
* prop(name [,value])  设置或获取属性；操作的DOM对象的属性（实现原理 dom.属性名） 一般用于操作内置属性
* removeProp(name)  移除dom对象上的属性 （实现原理：delete dom.属性名）

### 3.2 class操作
* addClass(类名)
* removeClass(类名)
* hasClass(类名) 返回布尔值
* toggleClass(类名)   切换；存在类名就删掉，不存在就添加；


###  3.3 代码文本值
* html([content]) 设置或获取元素的 innerHTML
* text([content]) 设置或获取元素的 innerText
* val([content])  设置或获取输入框元素的value值


## 4 样式操作
### 4.1 CSS方法
* css(name [,value])  设置或者获取元素的属性

### 4.2 元素位置
* offset();  返回对象{left:, top:}  可以进行设置，参数是对象; 同getBoundingClietnRect()相同

* scrollLeft()
* scrollTop()

### 4.3 元素大小（可读可写）
* width() height()   内容大小
* innerWidth()  innerHeight()   内容大小+padding大小
* outerWidth()  outerHeight()    内容大小+padding大小+border大小













