### ES6新增语法
    块级作用域 (let const)
        生成的是块级作用域
        封闭性
        没有变量提升
        也不和顶层对象挂钩
    解构赋值
      数组的解构赋值 (看结构 和 位置)
        [a,b,c] = [1,2,3]
      对象的解构赋值 (看结构 和 属性名)    
        {name:name,age:age} = {name:"damu",age:18}
        {name,age} = {name:"damu",age:18}
    对象的简写形式
        let name = "damu"
        {
            name:name, // name
            eat:function(){} // eat(){}
        }
    箭头函数
        (args) => {语句}   
        arr = arr.map((item)=>{        arr = arr.map(item => Math.sqrt(item))        arr = arr.map(Math.sqrt)
          retrun Math.sqrt(item)
        }) 
        this的指向跟作用域链有关 :  不需要this劫持了 可以避免隐式丢失
    函数形参的默认值
        function  test(age=18){}    
    字符串
        模板字符串 `a${}c`
    ...运算符  
        组合一个数组              (实参给形参赋值   解构赋值)
        平铺一个可迭代的结构
    Class
            
### ES6新增API
    字符串
        索引要设置规范!!! 一定要在 0 到 length之间  左闭右开
    数组
        splice +  map + arr[index]  : CRUD
        
        every + some + filter 
        
        map + reduce
        
        from
    Set
        存的值是唯一的
    Map
        键可以是任意类型
        性能高一点(比起object])