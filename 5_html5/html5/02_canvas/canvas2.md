### 1. Canvas应用场景

* 图表（饼图，直方图，折线图）
* 小游戏（代替flash）
* 炫酷特效，banner、广告

### Canvas使用步骤

* 获取canvas元素
* 设置canvas大小（不要在css中设置大小，在html标签的属性设置或者使用js）
* 获取绘图上下文 `canvas.getContext('2d')`
* 绘制图形


### 1 路径

```
开启路径
	ctx.beginPath()
	
关闭路径
	ctx.closePath()
	
路径描边
	ctx.lineWidth
	ctx.strokeStyle 属性
	ctx.stroke()
	
路径填充
	ctx.fillStyle 属性
	ctx.fill()
	
路径样式
	ctx.lineCap 路径两端样式
	ctx.lineJoin  路径连接点样式
	
线段
	ctx.moveTo()
	ctx.lineTo()
	
矩形路径
	ctx.rect(x,y,w,h)

圆弧路径
	ctx.arc(x,y,r,start,end)  
	
切线圆弧
	ctx.arcTo(x1,y1,x2,y2,r)

```

### 2 快速矩形

```
ctx.strokeRect(x,y,w,h)
ctx.fillRect(x,y,w,h)
ctx.clearRect(x,y,w,h)
```
### 3 变换

```
变换操作：
	ctx.translate(x, y)
	ctx.scale(xS, yS)
	ctx.rotate(弧度)
	
绘图环境的保存和恢复
	ctx.save()
	ctx.restore()
```
### 4 文本

```
ctx.strokeText(text, x, y)
ctx.fillText(text, x, y)

样式设置：
	ctx.font   
	
对齐方式
	ctx.textAlign
	ctx.textBaseline
```

### 5 复杂样式

#### 5.1 渐变

```
线性渐变
	var g= ctx.createLinearGiadient(x1,y1, x2, y2)
	g.addColorStop(位置，颜色)
	需要把渐变对象赋值给 fillStyle后者 strokeStyle
	
径向渐变
	var g = ctx.createRadialGradient(x1,y1,r1, x2,y2,r2)
	g.addColorStop(位置，颜色)
	需要把渐变对象赋值给 fillStyle后者 strokeStyle
```



#### 5.2 背景图

```
ctx.createPattern(imgDOM， repeat)
返回对象，把该对象作为颜色，赋值给fillStyle或者strokeStyle
repeat: repeat / no-repeat / repeat-x / repeat-y


先等图加载完毕，再去创建pattern对象
```



#### 5.3 阴影

```
ctx.shadowOffsetX
ctx.shadowOffsetY
ctx.shadowBlur
ctx.shadowColor
```



#### 5.4 不透明度

```
ctx.globalalpha  0~1之间的数字
```



### 6. 图像操作

#### 6.1 图像加载

```
ctx.drawImage(imgDom, x, y, width, height)
第四个和第五个参数可以省略，按照图片本身的大小
```

#### 6.2 图片合成

```
globalCompositeOperation 

前面的图像是目标图像
后面的图像是源图像
```

#### 6.3 像素操作

```
ctx.getImageData(x,y,w,h)  从画布中获取指定矩形区域的像素信息
ctx.putImageData(imageData, x,y)  把像素信息写入到画布
ctx.createImageData(w,h)   创建像素信息对象
```

### 7 画布操作

#### 7.1 画布裁剪

```
ctx.clip()  依赖于路径
```



#### 7.2 输入图片信息

```
canvas.toDataURL('image/jpg') 把canvas转为base64的字符串
```

#### 7.3 画布渲染画布

```
优化手段
```

