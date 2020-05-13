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



## 3 BOM 浏览器对象模型

### 3.1 window

window 是 浏览器端 JavaScript 中的全局对象； 所有的全局变量和函数其实都是window对象的属性；

#### 属性

* document

* history

* screen

* navigator

* location

* innerWidth  视口的宽度

* innerHeight 视口的高度

  > 获取视口的大小：
  >
  > window.innerWidth, window.innerHeight;   IE8+ ，会包含滚动条自身的宽度（通常17px）
  >
  > document.documentElement.clientWidth, document,documentElement,clientHeight; 	 全兼容， 不包含滚动条自身宽度

#### 方法

* 所有的弹框函数
* 所有的定时器和清除定时器函数
* open()  打开窗口
* print() 调用打印机

### 3.2 location

location对象描述的是地址信息

#### 属性（可读可写）

* href  完整的url
* protocol 协议
* hostname 主机名
* port  端口号
* host  主机名+端口号
* pathname  路径信息
* search   ？后面的 （搜索信息）
* hash   #后面的（锚点信息）

#### 方法

* reload() 刷新页面
* assign()  跳转页面  新页面会加入历史记录
* replace()  跳转页面 新页面不会加入历史记录

### 3.3 history

history对象描述历史记录

#### 属性

* length  返回本窗口历史记录个数

#### 方法

* back() 后退一步
* forward() 前进一步
* go()  后退或前进，指定参数 数字  2表示前进两步，-1表示后退一步



### 3.4 navigator

* userAgent 获取浏览器信息，用于判断用户浏览器版本

### 3.5 screen

* width 屏幕宽
* height 屏幕高



## 4 IE9+支持新的DOM方法

```
getBoundingClientRect()
querySelector()
querySelectorAll()
remove()   删除元素（自己）
classList 操作类  是个对象 包括三个方法 add()、remove()、toggle()
forEach()    遍历数族和nodeList  参数是回调函数，接受两个参数，数组成员、索引
```
