# JavaScript总结
## 1 事件机制
### 1.1 事件监听和解除事件监听

#### DOM0 方式

```
把事件当做dom对象的方法
```

#### DOM2 方式

```
addEventListener(事件名, fn)  添加事件监听
removeEventListener(事件名, fn) 解除事件监听
```

> DOM0方式和DOM2方式的区别：
>
> * dom0方式，绑定多次事件，会发生覆盖
> * dom2方法，添加多次事件，每次都会绑定

>IE8以及以下的浏览器不支持 addEventListener和removeEventListener
>
>代替方案： attchEvent()   detachEvent



### 1.2 事件列表

````
鼠标事件：
	click
	dblclick
	contextmenu  右击
	mousedown
	mouseup
	mousemove
	mosueover
	mouseout
	mouseenter IE9+
	mouseleave IE9+
	
文档事件：
	load
	unload   文档关闭的时候 一般不用
	beforeunload  文档关闭的时候触发  在函数中return一句话就可以
	

键盘事件：
	keydown
	keyup
	keypress 只有可输入字符的按键按下才能触发
	
窗口事件：
	scroll
	resize
	
表单事件：
	blur
	focus
	change
	select
	submit  监听给form
	reset   监听给form
	
图片事件：
	load
	error
	
````



### 1.3 Event对象

```
属性：
target
keyCode
clientX  在视口上的位置
clientY
offsetX  在元素上的位置
offsetY
pageX	在页面上的位置（有滚动条的时候与client不一样；没有滚动条与client相同）
pageY
screenX	 在屏幕上的位置
screenY


方法：
stopPropagation()  阻止事件冒泡
preventDefault()  阻止浏览器默认行为

```



## 2 获取CSS计算属性

```
obj.currentStyle  IE8以及以下的用法；
window.getComputedStyle(dom)  IE9+、firefox、chrome等高级浏览器
```



## 3 BOM

### 3.1 window

### 3.2 location

### 3.3 history

### 3.4 navigator

### 3.5 screen



## 4 IE9+支持新的DOM方法

```
getBoundingClientRect()
remove()
querySelector()
querySelectorAll()
```







CSS3 6天

HTML5 6天

移动端  11天