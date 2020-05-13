# jQuery03课堂笔记

## 1. jQuery的选择器

### 1.1 基础选择器

```
.idName
.className
tagName
*
selector,selector
```

### 1.2 层级选择

```
parent child
parent>child
prev+next
prev~next
```

### 1.3 过滤选择器

```
:first
:last
:eq(index)  从0开始
:lt(index)
:gt(index)
:odd	奇数
:even	偶数
:header		所有的h标签
:animated   正在执行动画的元素
```

### 1.4 内容选择器

```
:contains(text)
:empty
:parent
:has(selector)   li:has(.item) 
:not(selecotr)	 li:not(.item)  排除class值是item的li元素
```

### 1.5 属性选择器

```
[attrName]
[attrName=value]
[attrName!=value]
[attrName^=value]
[attrName$=value]
[attrName*=value]
[][][][]
```

### 1.6 子元素选择器（CSS3也有）

````
:first-child   li:first-child 
:last-child
:nth-child()  从1开始数
:nth-last-child()
:only-child
:first-of-type   li:first-of-type
:last-of-type
:nty-of-type()  从1开始
:nth-last-of-type()
:only-of-type()
````

### 1.7 可见性选择器

```
:hidden
:visible
```

### 1.8 表单选择器

```
:input  所有的表单控件
:text
:password
:checkbox
:radio
:file
:reset
:submit
:button
```

### 1.9 表单对象选择器

```
:enabled
:disabled
:checked
:selected
```





## 2. jQuery 属性操作

### 2.1 属性

```
prop()  适合操作内置属性   <input type="checkbox">
removeProp()	
attr()  适合操作自定义属性
removeAttr()
```

### 2.2 class操作

```
addClass()
removeClass()
toggleClass()
hasClass()  返回布尔值
```

### 2.3 代码、文本、值

```
html()
text()
val()
```



## 3. jQuery 样式操作

### 3.1 CSS

```
css(attrName)
css(attrName, value)
css({
	attrName1:value,
	attrName2:value
})
```



### 3.2 位置

```
offset()  
scrollLeft()
scrollTop()
```

### 3.3 大小

```
width() / height()
innerWidth() / innerHeight()
outerWidth() / outerHeight()
```



##  4 筛选器

### 4.1 过滤 (破坏性操作)

```
eq()
first()
last()
not()
filter()
has()
slice(start [,end])   
```



### 4.2 查找 （破坏性操作）

```
子元素：
find(selector)  后代元素
children([selector])  子元素

父元素
parent()  父元素
parents([selector]) 所有的祖先元素

兄弟元素：
next()
nextAll()
nextUntil(selector)  后面的兄弟元素 知道selector匹配到的元素（该元素不会被选上）
pre()
prevAll()
prevUntil()
siblings([selector])  除了自己所有的兄弟元素

```

> 过滤和查找的方法，称之为破坏性操作； 过滤和查找方法返回的jQueryDOM与调用他们的jQueryDOM不一样了；



### 4.3 串联

```
end()  返回最后一次破坏性操作之前的对象
```





## 5 DOM操作

### 5.1 内部插入

```
append()
appendTo()
prepend()
prependTo()
```

### 5.2 外部插入

```
after()
inertAfter()
before()
inserBefore()
```

### 5.3 包裹操作

```
wrap()  给每个元素包裹一个元素
wrapAll()  给所有元素包裹一个总的元素
unwrap() 删除父元素
```

### 5.4 替换

```
replaceWith()		旧的元素.repaceWith(新的元素)
replaceAll()		新的元素.repalceAll(旧的元素)
```

### 5.4 删除

```
remove()
empty()
```

### 5.5 克隆

```
clone()  
```







































```
博客平台：
	博客园
	CSDN
	简书
	掘金
```

