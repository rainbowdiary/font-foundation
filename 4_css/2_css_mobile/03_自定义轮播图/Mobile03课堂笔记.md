# Mobile03 课堂笔记

## 回顾

### 1 触摸事件

```
触摸事件：
	touchstart
	touchmove
	touchend
	touchcancel
	
移动端模拟鼠标动作
	在触发了触动动作之后，300ms之后，浏览器自动发生鼠标动作
	
点击穿透
	下层元素具有点击特性后者监听了click事件
	上层元素添加触动事件，且触发触摸时间之后，上层元素会消失
	
点击穿透的解决方案
	① 上层元素的触摸事件中，阻止默认动作
	② 所有的元素阻止默认行为
	③ 下层元素不使用具有点击特性的元素，使用其他元素代替超链接
	④ 利用css的pointer-events属性
	⑤ 让上层元素延迟消失
	
touchEvent 
	touchEvent对象
		changedTouches
		targetTouches
		touches
	touchList对象
		length
		通过下标获取touch对象
	touch对象 触点
		clientX
		clientY
		force
		
	
```





### 2 移动端适配

```
viewport适配：
	不论什么设备，把视觉视口设置为设计稿宽度
	使用initial-scale去设置， maximum-scale和minimum-scale都设置
	
REM适配
	使用rem单位代替px， 以设计稿宽度为基准
	根据不同设备宽度，动态设置根元素字体大小
	① 根元素字体大小 通过媒体查询设置
	② js动态设置根元素字体大小
	③ less 计算每个元素的rem
	
	
一物理像素边框
	使用伪元素当边框
	通过媒体查询 判断DPR，根据DPR，对伪元素进行scale缩放
    
    
图片适配
	① 背景图片 媒体查询
	② img标签 srcset
	③ picture source 
	
```



