/*
    Promise构造
    Promise.prototype.then
        参数: 两个异步回调onResolve,onReject
            用户传入  库异步执行
                当promise实例的状态确定为成功时 就要将onResolve注册到异步队列中
                当promise实例的状态确定为失败时 就要将onReject注册到异步队列中
                当promise实例的状态初始化时     就要将onResolve,onReject持有着
                        选择让数组来存当前的两类回调 [{onResolve:onResolve,onReject:onReject},{...},{},{},{}]
                        等待状态确定后 再决定将哪个回调注册到异步队列中
        返回值: 一个新的Promise
                返回的新的Promise实例的状态 和 onResolve,onReject有关
                    onResolve,onReject 返回一个值(非Promise)  返回的新的Promise实例的状态是成功状态
                    onResolve,onReject 返回一个Promise        返回的新的Promise实例的状态 跟当前返回的这个Promise保持一致
                    onResolve,onReject 执行时报错            返回的新的Promise实例的状态是失败的状态
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
    this.callBacks = [];

    function resolve(value) {
      that.state = RESOLVED
      that.value = value
      // 等promise状态确定时 将callBacks中的回调塞到异步队列中
      that.callBacks.forEach(function (item) {
        setTimeout(function () {
          item.onResolve()
        }, 0)
      })
    }
    function reject(errMsg) {
      that.state = REJECTED
      that.value = errMsg
      // 等promise状态确定时 将callBacks中的回调塞到异步队列中
      that.callBacks.forEach(function (item) {
        setTimeout(function () {
          item.onReject()
        }, 0)
      })
    }

    try {
      exec(resolve, reject)
    } catch (e) {
      reject(e.message)
    }

    return this;
  }

  MyPromise.prototype.then = function (onResolve, onReject) {
    var that = this;
    return new MyPromise(function (resolve, reject) {

      // 拿到onResolve 或 onReject的返回结果  根据这个返回结果来确定then返回的promise的状态
      function handleResult(callBack) {
        try {
          var result = callBack();
          if (result instanceof MyPromise) {
            result.then(function () {
              resolve()
            }, function () {
              reject()
            })
            //...
          } else {
            resolve()
          }
        } catch (e) {
          reject(e.message)
        }
      }

      if (that.state === PENDING) {
        // 当前promise实例在调用then方法的时候 状态没有确定 ;回调被同步注册
        that.callBacks.push({
          onResolve: function () {
            handleResult(onResolve)
          },
          onReject: function () {
            handleResult(onReject)
          }
        })
      } else if (that.state === RESOLVED) {
        // 当前promise实例在调用then方法的时候 状态已经确定为成功
        setTimeout(function () {
          handleResult(onResolve)
          // onResolve()
        }, 0)
      } else if (that.state === REJECTED) {
        // 当前promise实例在调用then方法的时候 状态已经确定为失败
        setTimeout(function () {
          handleResult(onReject)
          // onReject()
        }, 0)
      }
    })
  }
  w.MyPromise = MyPromise;
})(window)