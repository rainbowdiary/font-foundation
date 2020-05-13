## Canvas

### 1 Canvas基础

#### 1.1 canvas标签

```html
<canvas width="" height=""></canvas>
<!--不要在css中设置宽高-->
```



#### 1.2 canvas DOM对象

```
属性：
width
height
方法：
getContext('2d') 
```



#### 1.3 canvas使用步骤

```
第一步：
	获取canvas画布元素
	
第二步：
	设置画布的大小
	
第三步：
	获取绘图上下文（绘图环境） （画笔）
	
第四步：
	使用绘图上下文绘制各种图形
```



### 2 路径 Path

#### 1.1 开启路径

```
ctx.beginPath()   隔离前面的路径，使前面的路径结束
```



#### 1.2 关闭路径

```
ctx.closePath()    把路径闭合
```



#### 1.3 路径描边

```
ctx.strokeStyle = 'red';   //设置描边的颜色 默认黑色
ctx.lineWidth = 10;   //设置描边的宽度
ctx.stroke();   //描边  对前面的路径进行描边 
```



#### 1.4 路径填充

```
ctx.fillStyle = 'red';  //指定填充颜色 默认是黑色
ctx.fill()  // 填充
```



#### 1.5 路径样式

```
ctx.lineCap   设置路径两端的样式  round/square
ctx.lineJoin  设置连接点（夹角）  round/bevel
```

#### 1.6 绘制线段（基本路径）

```
ctx.moveTo(x,y) 线段起点（路径）
ctx.lienTo(x,y) 线段连接点

通过一个一个的线段，可以绘制所有的图像
```
```js
// 绘制起点
ctx.moveTo(150, 150);
 //绘制 连接点
 ctx.lineTo(250, 150);
 ctx.lineTo(250, 250);
 ctx.lineTo(100, 200);
 ctx.lineTo(150, 100);
 ctx.lineTo(200, 200);
 ctx.lineTo(250, 100);
 ctx.lineTo(300, 200);
 ctx.lineTo(350, 100);
 ctx.lineTo(400, 200);
 ctx.lineTo(150, 150);
```