
## HTML5新增标签

### 1. 新增的语义结构标签

```
<header></header>   页面的页头或section的页头
<nav></nav>   导航
<aside></aside>  侧边栏
<article></acticle>   文章
<section></section>  页面中的一块或文章的一段（章节）  aside和article都是特殊的section
<footer></footer>    页面的页脚或section的页脚

<main></main>  页面主体 （兼容性 IE不支持）
<hgroup></hgroup>    标题组  （w3c不支持）
```



### 2. 新增的其他语义标签

#### 2.1 状态标签

```
<meter>  表示度量 电量、电池容量、血量； 不能表示进度
	属性：	
	max
	min
	value
	high
	low
	optimum  最优值
	
<progress>  表示进度
	属性：
	max
	value
```



#### 2.2 列表

```
<datalist> 搜索框提示列表
	用于与input搜索框配合  datalist指定id，  input的list属性指定datalist的id值
	datalist 嵌套子元素 <option value="提示文字">
	
<details>	关键字详情  属性 open（指定默认展开状态）
<summary>  指定 details的标题
```



#### 2.3 注释标签

```
<ruby>
子元素 <rt> 指定注音   每个文字单独指定注音
```



#### 2.4 标记

```
<mark>  用于搜索结果的关键字标记
```



#### 2.5 图像

```
<figure>  用于文章中的插图 包含 figcaption和img
<figcaption>  插图的标题
```



### 3. 新增表单属性

#### 3.1 表单控件新增属性

```
placeholder  问题提示
autofocus    自动获取焦点  不用给值
autocomplete  自动完成，默认值是on，设置off，阻止自动完成
required    表示该字段必填 （用于表单验证）
pattern     指定正则，用于表单验证；  提交的时候验证
```

#### 3.2 input元素的type属性新增的值

```
文本输入类： （同text类似，用于验证）
	email  邮箱
	url   网址url
	number  数字 配合属性： max/min/step
    search  搜索框
    tel    电话 （无法验证）（在移动端会弹出数字按键）
    
范围选择
	range  配合属性 max/min/step
	
颜色选择框
	color
	
时间日期：
	date  年月日
	month  年月
	week   一年中第几周
	time   时间
	datetime-local  日期+时间
```

#### 3.3 form元素新增属性

```
novalidate  不进行验证 不用给值
```



### 4 H5兼容性处理

#### 原理

```
document.createElement()  把新标准创建一遍
通过css设置display类型
```

#### 解决方案

```html
<!--[if lte IE 8]>
<script src="html5shiv.js"></script>
<![endif]-->
```