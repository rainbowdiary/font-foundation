# DOM
## 事件
### 事件冒泡:
嵌套元素,当触发子元素事件,所有父辈元素的相同事件也会被触发
e参数:事件处理函数的参数,鼠标触发事件的时候获取鼠标的信息.
    e参数对象:
    高级浏览器有event参数对象,和window.event;
    低版本IE8一下的没有,只有window.event
取消冒泡: 
    高级浏览器:
    e.stopPropagation()
    window.event.cancelBubble=true
    低版本浏览器:
    window.event.cancelBubble=true;
### 事件流
* 事件的三个阶段:也叫做事件流,当触发某个元素时,先由外向内捕获到事件目标,再从事件目标由
* 内向外进行事件冒泡,事件冒泡和事件捕获可以任选一种方式
    1. 事件捕获 由外向内
    2. 事件目标 触发的元素
    3. 事件冒泡 由内向外

### 事件代理
优点：  
  1. 减少内存占用，减少事件注册 
  2. 新增元素实现动态绑定事件"
理解：
  1. 使用事件委托，就是将所有的操作放在js程序中完成，与DOM的操作只需要交互一次，这样就能减少与DOM交互次数，提高性能。
  2. 比如说对100个li绑定事件，只需要在js程序中完成，然后再进行一次DOM操作
  3. 每个函数都是对象，对象会占用内存，对象越多，性能越差。100个li就会占用100个内存空间，用事件委托，可以只对它的父级这个对象进行操作，节省了内存空间
原理：
  利用事件冒泡机制来实现
  例如：
    节点数div>ul>li>a
    a有点击事件，这个事件就会一次往外执行，
    事件委托就是给最外层的div加点击事件，那么里面的ul，li，a做点击事件，都会冒泡到外层div上，都会触发。这就是事件委托，委托他们父级代为执行。
实现：
  ul>li*4
  需求实现点击li输出"123"
  不需要给所有li绑定事件，
  只需要给父元素ul绑定事件即可实现
什么事件可以做事件委托 ?
  适合做事件委托: click，mousedown,mouseup,keydown,keyup
  不适合做事件委托:mousemove，每次都需要计算位置，非常不好把控


### 事件绑定
    1. on*** dom0 (只能事件冒泡)
    2. 高级浏览器:addEventListener dom2 (事件冒泡和事件捕获任选一种)
        elem.addEventListener("不带on的事件类型",事件处理函数,布尔值)
            布尔值:false时间冒泡(默认),true:时间捕获
            事件处理函数: 只能填写函数名,不能填写函数调用,只有在事件触发的时候,才会调用
        iE8一下:attachEvent("带on的事件类型")
## 事件类型
事件名:
    onmousewheel 鼠标滚轮
    onmouseleave 鼠标离开元素(没有冒泡事件)
    onmouseenter 鼠标进入元素(没有冒泡事件)
    onmouseover 
    onmouseout 
    transitionend 过渡完成后



# DOM事件
1.onSubmit 
  form表单上的事件:   
  作用:可以获取event阻止默认行为
2. keydown 鼠标点击事件
3.mousedown / mousemove / mouseup


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
