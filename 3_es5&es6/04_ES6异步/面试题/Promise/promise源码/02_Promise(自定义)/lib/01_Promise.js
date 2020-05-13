/*
    Promise构造
        1. 执行器
            同步的回调;
            由用户传入 库在返回实例之前同步调用 ;
            忽略他的返回值
        2. 执行器的参数 resolve,reject
            由库来传入 用户调用
        3. Promise的返回值
            执行器的执行过程会影响Promise的返回值
                如果执行器在执行过程中出错 那new Promise 返回一个失败状态的Promise实例
                如果执行器在执行过程中调用了自己的第一个函数参数
                        那new Promise 返回一个成功状态的Promise实例
                如果执行器在执行过程中调用了自己的第二个函数参数
                        那new Promise 返回一个失败状态的Promise实例
        4. 构造出来的promise实例 两个特征(状态 值)
             状态 : 初始化 成功 失败
             值: 基本数据类型 引用数据类型
    Promise.prototype.then
    Promise.prototype.catch
*/

(function (w) {
    var PENDING = "pending" // promise实例的初始化状态
    var RESOLVED = "resolved" // promise实例的成功状态
    var REJECTED = "rejected" // promise实例的失败状态

    function MyPromise(exec) {
        var that = this; //劫持this
        this.state = PENDING;
        this.value = undefined;

        function resolve(value) {
            that.state = RESOLVED
            that.value = value
        }
        function reject(errMsg) {
            that.state = REJECTED
            that.value = errMsg
        }

        try {
            exec(resolve,reject)
        }catch (e) {
            this.state = REJECTED;
            this.value = e.message
        }
  
        return this
    }

    w.MyPromise = MyPromise;
})(window)