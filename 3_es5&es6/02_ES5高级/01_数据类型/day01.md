### day01
    1. js是一门怎样的语言?
        函数化编程
        动态(弱类型)
        解释型(没有编译过程)
    2. js中的值传递?
        传递的都是栈中保存的内容
    3. 组包与拆包?  
        组包  基本数据类型包装成对应的引用数据类型
        拆包  valueOf(引用数据类型拆成对应的基本数据类型)
    4. 强制类型转换     
        显示
            toString(引用数据类型执行toString规则 先调toString方法 再调valueOf)
                String()
            toNumber(引用数据类型执行toNumber规则 先调valueOf方法 再调toString)
                Number()
                +(一元)
            toBoolean
                Boolean()
                !!
        隐式 
            toString
            toNumber
                +(二元) 做的是字符串的拼接 还是算数的运算
            toBoolean
                循环
                分支
                三元运算符
                短路或  短路与
        ==
           1. String、Number、Boolean和Object(有)
           2. Undefined和Null(无)
           3. 1与2之间的比较都为false 
           4. Undefined和Null之间的比较为true
           5.  NaN 不等于 NaN
           6.引用数据类型做比较 永远比较栈里的地址值    
           7. 其他情况全部 toNumber
    5. 静态方法 && 实例方法
          静态方法: 函数本身的方法(函数的角色是对象)          
          实例方法: 函数显示原型上的方法(函数的角色是对象)
    6. API(接口)
        文档! 说明书
    7. 高阶函数
        本身是一个函数 并且参数或者返回值还是一个函数    
              