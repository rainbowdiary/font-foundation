/*
    Promise.race(promiseArr)
    Promise.all(promiseArr)
    Promise.resolve(val)
        val : 非promise
        val : promise
    Promise.reject(errMsg)
        errMsg:错误信息


*/

(function (w) {
    var PENDING = "pending" // promise实例的初始化状态
    var RESOLVED = "resolved" // promise实例的成功状态
    var REJECTED = "rejected" // promise实例的失败状态

    function MyPromise(exec) {
        var that = this; //劫持this
        this.state = PENDING;
        this.value = undefined;
        this.callBacks = [];

        function resolve(value) {

            if(that.state !== PENDING){
                return
            }

            that.state = RESOLVED
            that.value = value
            // 等promise状态确定时 将callBacks中的回调塞到异步队列中
            that.callBacks.forEach(function (item) {
                setTimeout(function () {
                    item.onResolve()
                },0)
            })
        }
        function reject(errMsg) {

            if(that.state !== PENDING){
                return
            }

            that.state = REJECTED
            that.value = errMsg
            // 等promise状态确定时 将callBacks中的回调塞到异步队列中
            that.callBacks.forEach(function (item) {
                setTimeout(function () {
                    item.onReject()
                },0)
            })
        }

        try {
            exec(resolve,reject)
        }catch (e) {
            reject(e.message)
        }

        return this;
    }

    MyPromise.prototype.then = function(onResolve,onReject){
        var that = this;
        return new MyPromise(function (resolve,reject) {

            if(typeof onResolve !== "function"){
                onResolve = function (val) {
                    return val
                }
            }

            if(typeof onReject !== "function"){
                onReject = function (errMsg) {
                    throw new Error(errMsg)
                }
            }


            // 拿到onResolve 或 onReject的返回结果  根据这个返回结果来确定then返回的promise的状态
            function handleResult(callBack) {
               try{
                   // 实现了值的传递
                   var result = callBack(that.value);
                   if(result instanceof MyPromise){
                       result.then(function (val) {
                           resolve(val)
                       },function (errMsg) {
                           reject(errMsg)
                       })
                      //...
                   }else{
                       resolve(result)
                   }
               }catch (e) {
                   reject(e.message)
               }
            }

            if(that.state === PENDING){
                // 当前promise实例在调用then方法的时候 状态没有确定
                that.callBacks.push({
                    onResolve:function () {
                        handleResult(onResolve)
                    },
                    onReject:function () {
                        handleResult(onReject)
                    }
                })
            }else if(that.state === RESOLVED){
                // 当前promise实例在调用then方法的时候 状态已经确定为成功
                setTimeout(function () {
                    handleResult(onResolve)
                    // onResolve()
                },0)
            }else if(that.state === REJECTED){
                // 当前promise实例在调用then方法的时候 状态已经确定为失败
                setTimeout(function () {
                    handleResult(onReject)
                    // onReject()
                },0)
            }
        })
    }

    MyPromise.prototype.catch = function(onReject){
        return this.then(null,onReject)
    }

    MyPromise.reject = function(errMsg){
        return new MyPromise(function (resolve,reject) {
            reject(errMsg)
        })
    }

    MyPromise.resolve = function(val){
        return new MyPromise(function (resolve,reject) {
            if(val instanceof MyPromise){
               /* val.then(function (successVal) {
                    resolve(successVal)
                },function (errMsg) {
                    reject(errMsg)
                })*/
               val.then(resolve,reject)
            }else{
                resolve(val)
            }
        })
    }

    MyPromise.race = function(promiseArr){
        return new MyPromise(function (resolve,reject) {
            promiseArr.forEach(function (promise) {
                promise.then(function (val) {
                    resolve(val)
                },function (errMsg) {
                    reject(errMsg)
                })
            })
        })
    }

    MyPromise.all = function(promiseArr){
        return new MyPromise(function (resolve,reject) {
            var flag = 0;
            var resultArr =[];
            promiseArr.forEach(function (promise,index) {
                promise.then(function (val) {
                    flag++;
                    resultArr[index] = val;
                    if(promiseArr.length === flag){
                        resolve(resultArr)
                    }
                },function (errMsg) {
                    reject(errMsg)
                })
            })
        })
    }

    w.MyPromise = MyPromise;
})(window)