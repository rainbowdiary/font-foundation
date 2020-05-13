# 一.异步的最佳实践
* 思想
  * 使用同步的思想书写异步的代码;解决回调地狱
  * promise必定是要结合异步api;

## promise
1. 参数为执行器:
执行器是**同步的**回调函数和高阶函数,返回之前就调用了
2. 如何得到一个promise对象
    ```
    new Promise(function(resolve,reject){})
        resolve() : pending --> resolved
        reject() :  pending --> rejected
    ```
    执行器内部抛异常 : pending --> rejected
3. promise.then(onresolve,onreject) 返回值
  - then方法返回的新的promise 
  - 状态由then方法对应的回调的返回值绝定
  - then的参数是一个函数:
      - onresolve/onreject 返回一个值
        那then返回的promise会是resolved状态 且持有的值就是回调返回的值
      - onresolve/onreject 返回一个promise对象
        那then返回的promise就是回调返回的promise对象
      - onresolve/onreject 在执行时抛出异常
        那then返回的promise是rejected状态 且持有的值就是异常对象
    - then的参数不是一个函数:
      返回一个新的promise，状态将上一层promise状态穿透  
4. 特点:
  链式调用，一步都不能少
5. 异常处理
   1. else中处理
   2. .then添加第二个function处理
   3. .catch 原来promise继续往下传递
6. 数据传递
    resolve 数据传到下面第一个函数
    如果是reject 传给catch
7. 小球动画案例
querySelecteAll坑

## 自己写Promise源码
1.that.value : 返回值


### 二).generator
#### 基本流程 
1.Symbol(): 
私有属性, 基本数据类型
Math是object对象
命名空间:window属性
意义:函数内部定义,能访问;但是外部无法访问;更安全

2.迭代器
var of循环拿到属性值: 实现了迭代器协议的结构才可以使用var of来遍历得到属性值
iterator 拥有Symbol.iterator值的属性的函数
写第10个demo
#### 链式调用
    function * test(){
        yield 1;
        yield 2;
    }
    var it = test()
    it.next()
#### 异常处理
    try{}catch{}
#### 数据传递
    第二个next()的参数,是第一个yield的返回值

### 三)async&await

await ==>.then
