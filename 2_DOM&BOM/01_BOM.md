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
