# H503课堂笔记

### 1 路径

#### 1.1 路径开启

```
ctx.beginPath()
隔离前面的路径
```

#### 1.2 路径关闭

```
ctx.closePath()  闭合路径
```

#### 1.3 描边

```
ctx.lineWidth = number
ctx.strokeStyle = '';
ctx.stroke()
```

#### 1.4 填充

```
ctx.fillStyle = '';
ctx.fill()
```

#### 1.5 路径样式

```
ctx.lineCap  round
ctx.lineJoin   round
```

#### 1.6 线段

```
ctx.moveTo(x,y)
ctx.lineTo(x,y)
```

#### 1.7 矩形路径

```
ctx.rect(x,y,w,h)
```

#### 1.8 圆弧路径

```
ctx.arc(x,y,r,start, end)

start 标识圆弧的开始位置   
end 标识圆弧的结束位置

圆刻度： 0是三点钟方向， Math.PI 是9点钟方向，  Math.PI * 2 右是三点钟方向

弧度和角度：
	Math.PI弧度 = 180度
    2*Math.PI弧度 = 360度
    
    angle/180 * Math.PI
```

#### 1.9 切线圆弧

```
ctx.arcTo(x1,y1,x2,y2, r)

x1,x2: 直角点 端点1
x2,y2: 端点2   端点坐标不影响圆弧大小，只指明方向


arcTo（）调用之前需要有一个路径的点
```







### 2 快速矩形工具

```
ctx.strokeRect(x,y,w,h)  快速描边矩形  内部封装了路径，无需beginPath
ctx.fillRect(x,y,w,h) 快速的填充矩形
ctx.clearRect(x,y,w,h) 清除矩形
```



### 3 变换

```
变换操作： 
    变换是对坐标系的变换
    ctx.translate(x, y) 位移
    ctx.scale(xS, yS)  缩放
    ctx.rotate(弧度) 旋转


绘图环境的保存和恢复
	ctx.save()  保存当前的绘图环境
	ctx.restore() 恢复之前保存的绘图环境



```





### 4 文字操作

```
方法： （快速方法，内部封装了路径，无需开启路径）
	ctx.strokeText(text, x, y)  描边文字
	ctx.fillText(text, x, y)   填充文字
	
属性：
	ctx.font = ''  设置字体样式（大小，粗细，字体类型）   值同css的font属性相同
	ctx.textAlign = '';  设置文字的水平对齐方式， start/end/center
	ctx.textBaseline = '' 设置文字的垂直对齐方式   top/middle/bottom
	
	


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

