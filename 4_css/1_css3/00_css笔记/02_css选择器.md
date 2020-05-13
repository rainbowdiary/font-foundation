## 1 选择器

### 1.1 基本选择器

```
#idName  .className  tagName  *
E,E
li.active
```



### 1.2 层级选择器

```
E E
E>E
E+E
E~E
```



### 1.3 属性选择器

```
E[attr]
E[attr=value]
E[attr^=value]
E[attr$=value]
E[attr*=value]
E[attr~=value]
E[attr|=value]
```

### 1.4 伪类选择器

#### 动态伪类选择器

```
:link  :visited  :hover  :active  :focus
```

#### 目标伪类选择器

```
:target
```

#### UI元素伪类选择器

```
:checked   :disabled  :enabled
```

#### 结构伪类选择器

```
:root
:empty

:first-child
:last-child
:nth-child()   可以写数字，从1开始；关键字：odd、even  表达式：2n、2n+1、3n
:nth-last-child()
:only-child

:first-of-type
:last-of-type
:nth-of-type()
:nth-last-of-type()
:only-of-tyoe
```

#### 否定伪类选择器

```
:not(S)
```

#### 语言伪类选择器

```
:lang() 常用语言：en / zh-CN

```



### 1.5 伪元素选择器

```
:first-letter / ::firset-letter    选择第一个字符
:first-line   / ::first-line       选择第一行
:before / ::before	  相当于给元素添加子元素，配合 content 属性
:after / ::after
::placeholder   设置input的placeholder文字的样式
::selection     设置被选中的文本的样式

```



### 1.6 选择器优先级  权重

```
ID:   100
clasName、属性选择器、伪类选择器	： 10
元素选择器、伪元素元素		： 1
统配选择器*  ： 0

```


### 选择器

```
基本选择器
层级选择器
属性选择器
	[attr]
	[attr=value]
	[attr^=value]
	[attr$=value]
	[attr*=value]
	[attr~=value]
	[attr|=value]
伪类选择器；
	动态伪类：  :hover  :link  :visited  :avtive   :focus
	目标伪类：  :target
	语言伪类：  :lang()
	结构伪类：  :root  :empty  :first-child :last-child  :nth-child()  :nth-last-child()  :only-child   :first-of-typoe  :last-of-type   :nth-of-type()  nth-last-of-type()  :only-of-type
	UI元素伪类：  :disable  :enable   :checked
	否定伪类： :not(选择器)
   
伪元素选择器（伪对象）：
	:first-letter  /  ::first-letter
	:first-line    /  :: first-line
	:after  /  ::after
	:beforfe /  ::before
	::placeholder   ::-webkit-placeholder
	::selections
```


