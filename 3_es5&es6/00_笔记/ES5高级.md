# 第三阶段(过渡)
    ES5.1高级(为了源码)
        三座大山 两头神兽
        三座大山:   
            作用域与作用域链
            执行上下文与执行上下文栈
            原型与原型链
        两头神兽:
            闭包和原型链
    ES6.0
    Node
    工程化(git webpack4.0)
    项目
    pc项目
    
# DAY01-------
知识点
    1. js是一门怎样的语言?
    2. js中的值传递?
    3. 组包与拆包?  
    4. 强制类型转换  

# JS是什么?
	js是函数化编程,动态化编程(弱类型),解释型(不需要编译)
	强类型:
	定义变量是字符串,只能是字符串
	弱类型:
	定义变量是字符串,也可以是数值,方法等等;
# js分为:ecma/dom/bom
	TS:强类型语言

# 值与引用:
## JS只有值传递(值/地址值)
    值:传递的都是栈中保存的内容
	1>基本数据类型赋值;
	2>引用数据类型赋值地址值
	
## 赋值数组:
    [] :先new
    传的是栈里面的地址值
    引用类型的传递:是否改了指向

    左闭右开,左算右不算 ???
    数学知识点https://dayi.jd100.com/question/4209029/
    
# JS需要熟悉规则:
    变量的访问
    属性的访问规则
        数据共享的时候
	自己的理解是否和老师讲的一致;

# 组包和拆包:
String/Number/Boolean :包装类
    组包:基本数据类型包装成引用数据类型
    拆包: 
## 静态方法 && 实例方法
静态方法:函数本身的方法(函数的角色是对象)
实例方法:函数显示原形上的方法(函数的角色是对象)

## 静态方法 
    new 只能构造函数调
### 实例方法 
    可以直接调用
        var num = new Number(123);
        // 静态方法
        console.log(Number.isNaN(123))
        // 实例方法
        console.log(num.toString())
# 函数是一等公名
    即可以被当成对象来使用(可以添加属性和方法);
    也可以被当做代码块的集合来使用

# == 有自己的规则
    有和
## NaN 数字类型的非数字
    typeof typeof NaN

# 强制数据类型的转换:
	toString 引用类型转换:ToPrimitive[toString valueOf] 先转为基础数据类型 ; null -> "null", true -> "true", undefined -> "undefined",
		[]/{}: valueOf都是其本身; [].toString = ""; {}的toString = //"[object Object]"
	toNumber  引用类型转换:ToPrimitive[valueOf toString]
	toBoolean 只有假值和真值
	
== 有自己的规则;转数字

typeof null 是 object JS的bug

# 高阶函数:函数的参数还是函数,返回的还是函数;满足一点就是高阶函数

# 数组学习:
    干什么
    参数
    返回值
    到底影不影响老数组


# DAY02-----------
知识点:
### 作用域与作用域链
    左查询
    右查询
    变量查找的规则
### 执行上下文与执行上下文栈
    执行上下文与作用域的关系
    什么是递归
    提升
    this
    闭包

# 一.作用域和作用域链:变量查询的规则
变量查找和变量隔离
### 左查询 : 对等号左边的变量进行查询
                如果找到就使用
                如果整条作用域链上都没有该变量就会自动在顶级作用域声明一份
### 右查询 : 对等号非左边的变量进行查询
                如果找到就使用
                如果整条作用域链上都没有该变量就会报错
# 断点
    |> 跳到下一个断点处;
    add watch :监听变量的变化
    scope:作用域k
    作用域里面只有活动的指针指向活动的执行上下文

js不允许二次申明  

函数的内部特征:
    this.arguments(伪数组)

# 二.执行上下文个执行上下文栈
    执行上下文和作用域的关系:
        作用域是静态创建的(代码编译)

        全局执行上下文
            将全局变量挂靠给window当属性
        函数执行上下文
            市场那赋值给形参
            确定arguments的值
            处理局部变量
            处理局部函数
            提升
            确定this
            确定是否要才创建闭包
# 什么是递归
    自己调用自己,注意递归一定要设计出口
    在递归的时候 一个
## 提升
	函数的提升是整体的提升
	变量的提升是声明的提升
        函数表达式var出来的,提升变量
	函数的提升优于变量的提升
	提升是指提升到本层作用域的最顶层
## this指向谁?
    看函数调用的形式;this指向对象,不是基本数据类型

    独立调用:( fn() ) window
    构造调用:( new fn() )this指向创建出来的实例 
    隐式调用:( obj.fn() ) 调用者
    显式调用:( fn.call(obj) fn.apply(obj) ) apply/bind/call.this指向指定的对象
        call/apply: 函数的调用,传参的方式不一样;传列表/传数组
        bind:返回原函数的拷贝(新的函数)
    回调函数的this:查看文档,定时器,onclick
        你定义的 你没调用 最终执行了

    隐式丢失(this丢失,this变了),硬绑定bind解决:
        以隐式调用的凡是进行赋值或者传参,可是最终以其他方式调用,this指向就会丢失
多练,扩展,70%调bug

## 闭包
    当函数可以记住并访问到自己的作用域链时, 就会产生闭包;
    闭包就是浏览器一个C++对象
    鸡肋闭包
    有用闭包(异步编程!!)
        JS函数化编程,异步编程
### 闭包被存放在哪里? 
    存放在了内层函数作用域中
### 闭包什么时候被销毁?
    将内层函数置为null(一般不做)
### 闭包的作用
    延长外层函数变量的生命周期
### 闭包的缺点
    内存泄露:内存一部分被占用,不能用(在后台特别严重,需要高并发)
        代码都是用户拿到自己电脑执行,所以高并发不需要考虑

# 数据结构
    堆
    栈
    队列
    列表

# 原型和原型链:属性的查找规则
    隐式原型 所有的对象都拥有隐式原型
    显示原型 所有的函数都拥有显示原型,
        所有的函数都有prototype属性指向显示原型对象
        所有的显示原型对象都有个constructor属性指向原函数
    对象的隐式原型 指向其构造函数的显示原形

## 属性的查找和设置
    查找:先在对象的直接属性中找,找不到就上自己的原型链,整条都找不到返回undefined
    设置:动的都是对象的直接属性,如果对象自己拥有这个属性,就修改,没有就添加.

    例外:obj.a = "a" ; 不生效;obj中没有a,但是Obejct原型链有a属性,且属性的描述符都为false
## 对象的创建形式
    1.构造创建 var obj = new Object()
    2.字面量 {} (前端还是使用字面量形式创建对象,只是在设计函数的时候,有可能3.使用原型创建公用的函数)
    4.工厂模式function a(){return {}} (无法提供类型,都是Object)
    5.自定义构造函数 new构建;有了类型可以看到创造出来的对象从属于某个类
    6.自定义构造函数&原型 把共有的方法给自定义构造函数的原型,减少内存占用
    7.create  没有原型链的空对象 Object.create(null)

#### 1.对象的构造创建
(代码冗余,组织形式不好,没有类型,都是Obejct,内存占用大)
var obj = new Object();
obj.name = "zhangsan";
obj.age = 23;
obj.friend = function(){
    console.log("朋友太多了!,数不过来");
}
console.log(obj)

#### 2.对象字面量
(只解决了组织形式不好)
var obj = {
    name : "zhangsan",
    age: 23,
    firend: function(){
        console.log("太多了");
    }
}

#### 3.工厂模式  
方式: function(){return {}} (组织形式变好了,代码不冗余,没有类型都是Object)
function CreateObj(name,age){
    return {
    name: name,
    age: age,
    friend: function(msg){
        console.log(msg)
    }
}
}
var zhangsan = CreateObj("zhangsan",23);
var lisi = CreateObj("lisi",39)
zhangsan.friend("太多了")
console.log(zhangsan);
console.log(lisi);

#### 4.自定义构造函数
(让对象拥有了类型;控制台可以看到zhangsan和lisi两个对象都是Person下的)
function Person(name,age){
    this.name = name;
    this.age = age;
    this.friend = function(msg){
        console.log(msg);
    };
}
var zhangsan = new Person("zhangsan",23);
var lisi = new Person("lisi",45);
console.log(zhangsan);
zhangsan.friend("朋友太多了" );

#### 5.自定义构造函数&原型
(占用空间少了,把公共function给原型)
Person.prototype.friend = function(msg){
    console.log(msg);
}
function Person(name,age){
    this.name = name,
    this.age = age
}
var zhangsan = new Person("zhangsan",23);
var lisi = new Person('lisi',34);
console.log(zhangsan,lisi);
zhangsan.friend("张三朋友太多了");

构造函数都是首字母大写,都需要构造调用,使用了this;
## instanceof关键字 
 a instanceof b  
 a是对象,b是函数 
 说明:b的显示原型是否在a的隐式原型链上;a是不是在b的原型链上
 移动端的app依赖内置浏览器,操作系统不升级,内置浏览器不会升级

### 如何判断一个对象是不是数组;
#### 方法1:数组的isArray方法,但是兼容性不好,特别是移动端兼容性问题
var a = {};
console.log(Array.isArray(a));
#### 方法2:写isArray方法
var obj = {};
Object.prototype.isArray = function(){
    return Object.prototype.toString.call(this).indexOf("Array")!==-1
};
// 因为是原型上的方法所以需要跟普通toString方法一样无法修改和遍历
Object.defineProperty(obj,"isArray",{
    value: function(){
    return Object.prototype.toString.call(this).indexOf("Array")!==-1
},
    writable:false,
    enumerable:false,
    configurable:false
})
for(i in obj){  //不能遍历了
    console.log(i);
}
console.log(obj.isArray());
#### 方法3:instanceof
var a = [];
console.log(a instanceof Object);
console.log(a);  
## 继承
 1.构造函数继承(属性)
 2.原型链继承(方法)
 3.对象级别的继承 create()
## 属性的属性
属性描述符: 属性的属性(元属性)
在js中属性可以分为两拨:
    数据描述符: 具有value和writable的属性
    访问描述符: 具有get和set方法的属性(this指对象本身)
configurable: true 代表这个属性的可配置权限(能否被删除 能否被重新配置)
enumerable: true   代表这个属性的可枚举权限(能否出现在对象的for in循环中)
value: "达姆"      代表当前这个属性的值
writable: true     代表当前这个属性的值能否被修改

get:function(){}
set:function(){}

### 属性操作
获取属性描述符 Object.getOwnPropertyDescriptor(obj,"属性")
修改&新增属性 Object.defineProperty(obj,"属性",{属性描述符})
返回对象的所有直接属性 Object.getOwnPropertyNames(obj)
(不会遍历原型链，只在对象中查找) obj.hasOwnProperty("a“);
####　检查对象的存在性　
in关键字 (会遍历原型链)
Object.getOwnPropertyNames(obj)返回对象的所有直接属性
obj.hasOwnProperty("a“);  (不会遍历原型链，只在对象中查找)
### 对象的不变性
对象常量属性 writable/configurable为false
对象禁止扩展 Object.preventExtensions(obj)
对象密封 Object.seal(obj)
对象冻结 Object.freeze(obj)

深度冻结
 属性的值是对象,使用freeze只会冻结指定对象,不能冻结对象里的对象
让原型链上的属性都不可枚举
    // 在js中 所有的方法都上不了原型链 只能影响对象的直接属性!!
    // 关键字可以上原型链
# mdn查看运算符的优先级:new 带括号 不带括号优先级

# new 干了哪些事?
