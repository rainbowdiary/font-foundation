###作用域与作用域链
    左查询 : 对等号左边的变量进行查询
    右查询 : 对等号非左边的变量进行查询
    变量查找的规则
        基于左查询&右查询
        按整条作用域链查找变量,找到了就使用不再继续往上寻找,
        如果整条作用域链都没有该变量的声明,
                左查询会自动在顶级作用域声明一份
                右查询会报错      
                
###执行上下文与执行上下文栈
    执行上下文与作用域的关系
        作用域是静态创建的(代码编译)    ;  执行上下文是动态创建(代码执行前)
        作用域的作用: 维护变量的查询规则
            全局作用域
            函数作用域
        执行上下文的作用: 为代码执行创建一些必要的条件
            全局执行上下文
                将全局变量挂靠给window当属性
                将全局函数挂靠给window当方法
                提升
                确定this的指向
            函数执行上下文
                实参赋值给形参
                确定arguments的值
                处理局部变量
                处理局部函数
                提升
                确定this指向
                确定要是否创建闭包
                
    什么是递归
        自己调用自己, 注意递归一定要设计出口!
        在递归的时候 一个作用域才有可能对应上多个未出栈的执行上下文
        
    提升
        变量的提升是声明的提升
        函数的提升是整体的提升
        函数的提升优于变量的提升
        提升是提升到本层作用域的最顶层
        
    this
        看函数调用位置的调用形式
            独立调用  this --> window
            构造调用  this --> 创建出来的实例
            隐式调用  this --> 调用者
            显示调用  this --> 指定的对象
        回调函数
            自己定义  自己没有调用 最终执行了
            this --> 查阅api
        隐式丢失
            以隐式调用的方式进行赋值或者传参    可是最终使用其他方式进行调用  this指向就会丢失     
            使用硬绑定来解决隐式丢失(bind)
            
    闭包
        当函数可以记住并访问到自己的作用域链时就会产生闭包
        鸡肋闭包
            外层执行上下文还未出栈 内层函数就调用了
        有用闭包(异步编程!!!)
            外层执行上下文已经出栈 内层函数调用
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        