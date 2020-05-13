# 布局01 课堂笔记

## 回顾

### 1 过渡

#### 1.1 过渡如何触发

```
css动态伪类选择器
JS事件
媒体查询
```

#### 1.2 过渡属性

```
transition-duration: 过渡时间
transform-property：all/多个用逗号隔开
transition-timing-function: ease/linear/ease-in/steps()... 贝塞尔
transition-delay: 延迟时间
transition:
```

#### 1.3 过渡事件

```
transitonrun
transitonstart
transtioncancel
transitonend (常用)
```



### 2 动画

#### 2.1 关键帧

```
@keyframes 名字{
	0% {}
	100% {}
}
```

#### 2.2 动画属性

```
animation-name:关键帧名称
animation-duration: 执行时间
animation-timing-function: 
animation-delay
animation-direction: reverse / alternate(交替运行)
animation-iteration-count: 循环次数 infinite（无限）
animation-play-state: running/paused 
animation-fill-mode: forwards/ backwrad/both
```

#### 2.3 事件

```
animationstart
animationend
animationiteration
```

### 3 WEB字体

```
针对某几个文字定制字体
字体图标
```



## 布局的总结

### 1. 布局技术

* 浮动布局 
* 定位
* inline-block

### 2 新的布局技术

* Flex 伸缩盒（弹性盒）
* 多列布局 (colums)
* 响应式布局（媒体查询）
* 网格布局Grid



## 常见经典布局总结

### 1 粘连布局

```
实现思路：
	① 把页脚放在包裹元素外面
	② 设置包裹元素最小高度是 100%（视口的100%）
	③ 设置页脚负的外边距 margin-top 负自身高度
	④ 给内容元素添加padding-bottom (footer的高度)  （内容元素是包裹元素的子元素）
```



### 2 圣杯布局

```
1. 左边，右边宽度固定， 中间宽度随着屏幕变化
2. 三个全部浮动，左边右边指定宽度，中间指定宽度100%
3. 给三个的父元素（main），设置margin-left和marign-right 都是侧边栏宽度
4. 左边： margin-left:-100%, 再设置相对定位，left:-自身宽度
5. 右边： margin-left:-自身宽度，再设置相对定位，left:自身宽度
```



### 3 双飞翼布局

```
1. 左边，右边宽度固定， 中间宽度随着屏幕变化。与圣杯布局相同
2.  三个全部浮动，左边右边指定宽度，中间指定宽度100%
3. 中间元素添加子元素，中间子元素设置margin-left和margin-right是侧边栏宽度
4. 左边：margin-left: -100%
5. 右边： margin-left:-自身宽度
```



### 4 水平垂直居中

```
第一种方式：
	left:50% top:50% margin-left;-宽度一半 margin-top:-高度一半

第二种方式：
	left:50%;top:50%; transform:translate(-50%, -50%)

第三种方式：
	left：0 top：0 right：0 bottom：0  margin:auto
```





## 伸缩盒 弹性盒 Flex

### 1. 设置伸缩容器

```
display: flex
display: inline-flex
```

### 2 设置主轴方向和换行

```
方向：
	flex-direction: row / row-reverse / column / column-reverse

换行：
	flex-wrap: wrap / nowrap / wrap-reverse
	
复合属性：
	flex-flow
```

### 3. 主轴对齐

伸缩项目在主轴方向上的对齐方式

```
jusitify-content: flex-start / flex-end / center / space-between  / space-around / space-evenly
```



### 4. 侧轴对齐

伸缩项目在侧轴方向的对齐方式

```
主轴没有换行，只有一条主轴线
align-items: stretch(默认值) / flex-start / flex-end / center / baseline

主轴发生换行，多条主轴线
align-content: stretch(默认值) / flex-start / flext-end / center / space-around / space-between / space-evenly 

```



### 5. 伸缩项目伸缩

```
flex-basis: 基准值 默认值auto； 代替伸缩项目在主轴方向上的长度设置（width/height）
flex-grow: 扩展比率 默认是0
flex-shrink: 收缩比率 默认是1  
flex: 复合属性 grow shrink basis
	flex：1   表示 flex:1 1 0%;
	flex: auto  表示 flex: 1 1 auto
	flex: none  表示 flex: 0 0 auto
	flex: 0 auto;  表示 flex: 0 1 auto;
```



### 6 伸缩项目排序

```
order: number 数值越小越靠前
```



### 7 伸缩项目单独设置侧轴对齐方式

```
align-self: auto / stretch / flex-start / flex-end / baseline / center
```



### 8 flex属性总结

````
伸缩容器属性
display: flex/inline-flex
flex-direction
flex-wrap
flex-flow
jusitify-content 主轴对齐方式
align-items: 侧轴对齐方式（不换行）
align-content: 侧轴对齐方式（换行）

伸缩项目的属性
flex-grow 扩展比率
flex-shrink 收缩比例
flex-basis  基准值
flex 
order 排序
align-self
````



### 9 伸缩盒应用案例

* 实现水平垂直居中（两种方式）
* 实现圣杯布局