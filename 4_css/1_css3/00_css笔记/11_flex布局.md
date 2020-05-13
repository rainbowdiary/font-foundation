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