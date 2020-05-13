### 如何得到一个Promise对象
    1. new Promise(function(resolve,reject){})
        resolve() : pending --> resolved
        reject() :  pending --> rejected
        执行器内部抛异常 : pending --> rejected
    2. promise.then(onresolve,onreject) 返回值
        then方法返回的promise 由then方法对应的回调的返回值绝定
            onresolve/onreject 返回一个值: 那then返回的promise会是resolved状态 且持有的值就是回调返回的值
            onresolve/onreject 返回一个promise对象 : 那then返回的promise就是回调返回的promise对象
            onresolve/onreject 在执行时抛出异常 :   那then返回的promise是rejected状态 且持有的值就是异常对象
            如果没有对应的回调:    那then将传递上一层的promise对象
            
### 注意点
    promise是一次性的
    promise必定是要结合异步api的   
    异步编程
        1. 唤起异步线程(黑红树) 持有异步的回调函数
        2. 异步线程一定要等待一定时机 将回调函数塞入异步队列
        3. v8轮询异步队列 执行队列中的回调
    return 只会返回一个值!!!!!    
    new Promise(exec)
        1. 实现原型链 
        2. 确定this指向
        3. 执行exec
        4. 判断返回值
    new Foo
        1. 实现原型链 
        2. 确定this指向
        3. 判断返回值
    
### 流程
    基本使用
    链式调用
    异常处理  
    数据传递      
    
    
         