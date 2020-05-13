# CSS3第三天笔记

## 回顾

### 1 盒子阴影

```
box-shadow: 2~6个值
```

### 2 盒子倒影

```
-webkit-box-reflect:方向 间距 图片（url，渐变）
```

### 3 不透明度

```
opacity: 0~1
```



### 4 边框图片 (了解)

```
border-image
border-image-source
border-image-slice
border-iamge-width
border-image-repeat
```



### 5 边框圆角

```
border-radius:
border-top-left-radius
border-top-right-radius
border-bottom-left-radius
border-bottom-right-radius
```



### 6 背景

```
新增属性：
background-origin: padding-box(默认)  border-box  cotent-box
background-clip: border-box(默认)  padding-box  content-box
background-size: 长度单位。关键字： cover,contain

复合：
background: color image repeat position/size attachment origin clip

多重背景
background: bg,bg,bg
```





### 7 外轮廓

```
outline
outline-style
outline-color
outline-width
outline-offset 只能正值
```



### 8 文本对齐

```
text-align: start/end
text-align-last: 设置最后一行的对齐方式
vertical-align
```













## CSS3

### 1 文本

#### 1.1 文本阴影

```
text-shadow: length① length② blur color 指定2~4个

可以指定多个阴影
```

#### 1.2 文本溢出 

```
text-overflow: clip(默认)  ellipsis

注意：
text-overflow要想生效，必须设置 overflow;hiiden,并且强制文字在一行显示（white-space:nowrap）
```

#### 1.3 文本换行

```
white-space: 用来控制强制一行像是或者文本格式显示
取值：
	normal
	pre		让文本原样显示 （同标签pre的效果相同）
	pre-wrap  在pre的基础上可以自动换行
	pre-line  与normal相似，识别换行符
	nowrap  强制文字在一行显示
```

```
控制单词内部断行
overflow-wrap/word-wrap  :  noraml   break-work(允许单词内部断开)
word-break: noraml  keep-all(让中文和英文特性一样，有单词边界)  （不太符合国情）
```

#### 1.4 文本修饰

```
text-decoration: CSS3将其变为了复合属性
text-decoration-line:  underline/overline/line-through
text-decoration-style:  solid / dotted / dashed / wavy
text-decoration-color: 颜色
```

#### 1.5 文本描边

```
-webkit-text-stroke-width  指定描边宽度
-webkit-text-stroke-color  指定描边颜色
-webkit-text-stroke: width color 复合属性
```



#### 1.7 其他文本设置

```
text-transform: capitalize(每个单词首字母大写)  / uppercase(全部大写)  / lowercapse(全部小写)
```

```
tab-size(了解) 设置tab键的宽度  （生效前提：设置white-space:pre）
```





### 2 渐变

#### 2.1 线性渐变

```
linear-gradient(渐变方向, 渐变颜色)
```

```
方向：
	角度：
		0deg (从下倒上)， 角度变大，顺时针改变方向
	关键字：
		to bottom(默认)/ to left/  to right/ to top left / to rigth bottom
		
颜色的设置
	多个颜色用，隔开，最少写两个，无限多
	颜色可以指定位置，位置用百分比或者具体的长度
	如果不指定位置，第一个颜色0%, 最后一个颜色 100%, 其他的均匀分布
```

#### 2.2 径向渐变

```
radial-gradient(圆的类型 半径 at 圆心位置， 颜色)
```

```
圆的类型
	circle
	ellipse  （椭圆）

半径：
	指定具体的值
		circle只需指定一个值
		ellipse 一到两个值
	关键字：
		closest-side
		farthest-side (默认)
		closest-corner
		farthest-corner
		
圆心位置
	可以指定具体的长度
	关键字 left/right/center  top/bottom/center
	如果只指定一个值，另一个值取默认值
```



#### 2.3 重复渐变

```
repeating-linear-gradient()  参数与普通渐变相同的
repeating-radial-gradient()  

注意：
	重复渐变，指定颜色的位置，且最好用具体的px单位
```



### 3 变换 transform

#### 3.1 CSS属性

```
transform: 2d变换/3d变换
```



#### 3.2 2d变换函数

```
位移：
	translateX(x)  值是长度
	translateY(y)
	tranlsate(x, y)
	
缩放：
	scaleX()  值是倍数
	scaleY()
	scale() 1~2值

旋转：
	rotate()  单位是deg
	
扭曲
	skewX()	单位是deg
	skewY()
	skew()
```












